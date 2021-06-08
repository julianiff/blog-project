export type viewVariants = 'Intro' | 'Slideshow' | 'Code';

type ViewType = {
  [key in viewVariants]: any[];
};

export const Views: ViewType = {
  Intro: [
    {
      component: 'iff-page-layout',
      props: [{theme: 'dark'}, {test: 'farm'}],
      innerText: '',
      slots: [
        {
          slotName: 'header',
          component: 'iff-title',
          props: [{level: '1'}],
          innerText: 'Julian Iff',
          slots: [],
        },
        {
          slotName: 'body',
          component: 'iff-split',
          props: [],
          slots: [
            {
              slotName: 'start-text',
              component: 'iff-link',
              props: [{event: 'Code'}],
              slots: [
                {
                  slotName: '',
                  component: 'iff-title-modal',
                  props: [],
                  innerText: 'Code',
                  slots: [
                    {
                      slotName: 'title',
                      component: 'iff-title',
                      props: [{level: 1}],
                      innerText: 'Code',
                      slots: [],
                    },
                    {
                      slotName: 'modal-text',
                      component: 'iff-title',
                      props: [{level: 3}],
                      innerText: 'This is the modal text that is not shown',
                      slots: [],
                    },
                  ],
                },
              ],
            },
            {
              slotName: 'end-text',
              component: 'iff-link',
              props: [{href: 'dev/projects'}],
              slots: [
                {
                  slotName: '',
                  component: 'iff-title-modal',
                  props: [
                    {
                      modalTextOrientation: 'rotate(-90deg)',
                    },
                  ],
                  slots: [
                    {
                      slotName: 'title',
                      component: 'iff-title',
                      props: [{level: 1}],
                      innerText: 'Projects',
                      slots: [],
                    },
                    {
                      slotName: 'modal-text',
                      component: 'iff-title',
                      props: [{level: 3}],
                      innerText: 'This is the modal text that is not shown',
                      slots: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  Code: [
    {
      component: 'iff-page-layout',
      props: [{theme: 'dark'}],
      innerText: '',
      slots: [
        {
          slotName: 'header',
          component: 'iff-title',
          props: [{level: '1'}],
          innerText: 'Julian Iff',
          slots: [],
        },
        {
          slotName: 'body',
          component: 'iff-row-layout',
          props: [],
          slots: [
            {
              slotName: '',
              component: 'iff-card',
              props: [{imageSrc: 'dev/transformer.png'}],
              slots: [
                {
                  slotName: 'title',
                  component: 'iff-title',
                  props: [{level: '4'}],
                  innerText: 'JSON to Lit (Webcomponents) transformer',
                  slots: [],
                },
                {
                  slotName: 'lead',
                  component: 'iff-text',
                  props: [{styling: 'paragraph-slim'}],
                  innerText:
                    'Module consumes a specific JSON format and transforms it into lit Webcomponents',
                  slots: [],
                },
              ],
            },
            {
              slotName: '',
              component: 'iff-card',
              props: [{level: '1'}],
              slots: [
                {
                  slotName: 'title',
                  component: 'iff-title',
                  props: [{level: '4'}],
                  innerText: '&lt; iff-* Design System',
                  slots: [],
                },
                {
                  slotName: 'lead',
                  component: 'iff-text',
                  props: [{styling: 'paragraph-slim'}],
                  innerText:
                    'A small design system built with Lit Webcomponents with CSS and Slot Stacks',
                  slots: [],
                },
              ],
            },
            {
              slotName: '',
              component: 'iff-card',
              props: [{level: '1'}],
              slots: [
                {
                  slotName: 'title',
                  component: 'iff-title',
                  props: [{level: '4'}],
                  innerText: 'JSON to Lit (Webcomponents) transformer',
                  slots: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  Slideshow: [
    {
      component: 'iff-page-layout',
      props: [{theme: 'lightdarkdark'}],
      innerText: '',
      slots: [
        {
          slotName: 'header',
          component: 'iff-title',
          props: [{level: '1'}],
          innerText: 'Julian Iff',
          slots: [],
        },
      ],
    },
  ],
};
