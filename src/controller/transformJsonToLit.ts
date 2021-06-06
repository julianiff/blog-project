type propsStructure = {
  [key in string]: string;
};

interface Component {
  component: string;
  props: propsStructure[];
  innerText?: string;
}

interface SlottedComponent {
  slotName: string;
}

interface Slots {
  slots: slottedElement[];
}

type slottedElement = Component & SlottedComponent & Slots;
type JsonStructure = Component & Slots;

export const transformJsonToLit = (json: JsonStructure[]): HTMLElement[] => {
  return json.map((item) => {
    const element = createAttributedTag(item.component, item.props);

    return createSlottedElements(element, item.slots);
  });
};

const createAttributedTag = (
  tagName: string,
  attributes: any[]
): HTMLElement => {
  const tag = document.createElement(tagName);
  attributes.forEach((item) =>
    tag.setAttribute(Object.keys(item)[0], item[Object.keys(item)[0]])
  );
  return tag;
};

const createSlottedElements = (
  element: HTMLElement,
  slots: slottedElement[]
) => {
  slots.forEach((item) => {
    const child = createAttributedTag(item.component, item.props);
    child.setAttribute('slot', item.slotName);
    child.innerHTML = !!item.innerText ? item.innerText : '';

    if (item.slots.length > 0) {
      createSlottedElements(child, item.slots);
    }
    element.appendChild(child);
  });

  return element;
};
