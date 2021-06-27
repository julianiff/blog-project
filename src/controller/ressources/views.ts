export type viewVariants =
  | 'Intro'
  | 'Code'
  | 'Typescript'
  | 'Webcomponents'
  | 'StateManagement'
  | 'Azure'
  | 'Node';

type ViewType = {
  [key in viewVariants]: any[];
};

interface TextTitle {
  text: string;
  title: string;
}

export const leftSideText = (props: TextTitle) => [
  {
    component: 'iff-page-layout',
    props: [],
    innerText: '',
    slots: [
      {
        slotName: 'body',
        component: 'iff-row-layout',
        props: [],
        slots: [
          {
            slotName: '',
            component: 'iff-split',
            props: [],
            slots: [
              {
                slotName: 'start-text',
                component: 'iff-title-lead',
                props: [],
                innerText: 'What I like',
                slots: [
                  {
                    slotName: 'lead-text',
                    component: 'iff-grid-item',
                    props: [{width: 'slim'}],
                    innerText: '',
                    slots: [
                      {
                        slotName: '',
                        component: 'iff-icon-text',
                        props: [{event: 'Intro'}],
                        innerText: '',
                        slots: [
                          {
                            slotName: 'text',
                            component: 'iff-text',
                            props: [{styling: 'paragraph'}],
                            innerText: 'Overview',
                            slots: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    slotName: 'lead-text',
                    component: 'iff-grid-item',
                    props: [{width: 'slim'}],
                    innerText: '',
                    slots: [
                      {
                        slotName: '',
                        component: 'iff-title',
                        props: [{level: '4'}],
                        innerText: props.title,
                        slots: [],
                      },
                      {
                        slotName: '',
                        component: 'iff-text',
                        props: [],
                        innerText: props.text,
                        slots: [],
                      },
                    ],
                  },
                ],
              },
              {
                slotName: 'end-text',
                component: 'iff-title-lead',
                props: [],
                slots: [
                  {
                    slotName: 'title',
                    component: 'iff-title',
                    props: [{level: 2}],
                    innerText: 'Whoami',
                    slots: [],
                  },
                  {
                    slotName: 'lead-text',
                    component: 'iff-title',
                    props: [{level: 4}],
                    innerText:
                      'My passion is to create new digital features and products that transform how users achieve their goals.',
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
];

export const Views: ViewType = {
  Intro: [
    {
      component: 'iff-page-layout',
      props: [],
      innerText: '',
      slots: [
        {
          slotName: 'body',
          component: 'iff-row-layout',
          props: [],
          slots: [
            {
              slotName: '',
              component: 'iff-split',
              props: [],
              slots: [
                {
                  slotName: 'start-text',
                  component: 'iff-title-lead',
                  props: [],
                  innerText: '',
                  slots: [
                    {
                      slotName: 'title',
                      component: 'iff-title',
                      props: [{level: 2}],
                      innerText: 'What I like',
                      slots: [],
                    },
                    {
                      slotName: 'lead-text',
                      component: 'iff-button-list',
                      props: [],
                      innerText: '',
                      slots: [
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{event: 'Typescript'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Typescript',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{disabled: 'true'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'React',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{event: 'Webcomponents'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Web Components',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{event: 'Webcomponents'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Lit.dev',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{disabled: 'true'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Vue.js',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{event: 'StateManagement'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'State Management',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{disabled: 'true'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'styled-components',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{event: 'StateManagement'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Redux',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{disabled: 'true'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'PHP / Laravel',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{disabled: 'true'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Kotlin',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{disabled: 'true'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Go',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{event: 'Node'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Node',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{disabled: 'true'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Spring-Boot',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{disabled: 'true'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'K8s',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{event: 'Azure'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Azure Pipelines',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{event: 'Azure'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Azure Services',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{disabled: 'true'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Scalable components',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{href: '/project/design-system/'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Design System',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{disabled: 'true'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Micro Services',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{disabled: 'true'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Cluster',
                              slots: [],
                            },
                          ],
                        },
                        {
                          slotName: '',
                          component: 'iff-button',
                          props: [{href: '/project/apollo/'}],
                          innerText: '',
                          slots: [
                            {
                              slotName: '',
                              component: 'iff-text',
                              props: [{styling: 'label'}],
                              innerText: 'Apollo / GraphQL',
                              slots: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  slotName: 'end-text',
                  component: 'iff-title-lead',
                  props: [],
                  slots: [
                    {
                      slotName: 'title',
                      component: 'iff-title',
                      props: [{level: 2}],
                      innerText: 'Whoami',
                      slots: [],
                    },
                    {
                      slotName: 'lead-text',
                      component: 'iff-title',
                      props: [{level: 4}],
                      innerText:
                        'My passion is to create new digital features and products that transform how users achieve their goals.',
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
  Typescript: leftSideText({
    title: 'Typescript',
    text: 'All of my current projects have their codebase in Typescript and are transpiled with modern build Tools (Webpack, Rollup.js) to Javascript.',
  }),
  StateManagement: leftSideText({
    title: 'State Management',
    text: 'React Project mainly used Redux with redux-saga. For smaller projects or components, I prefer React State Management with hook-reducers or recoil. Web Components mainly use event state management, redux or Apollo/GraphQl.',
  }),
  Webcomponents: leftSideText({
    title: 'Webcomponents & Lit',
    text: 'Web components are unique in encapsulating styling, and Lit.dev is a great library that allows building Web components in a declarative and Fluent style. This Website is also #BuildWithLit.',
  }),
  Node: leftSideText({
    title: 'Node',
    text: 'Services built with express.js and Koa.js. Use of MVC pattern as well as micro-services for specific APIs. I always enjoy making Azure Functions in Typescript with queue triggers.',
  }),
  Azure: leftSideText({
    title: 'Node',
    text: 'Services built with express.js and Koa.js. Use of MVC pattern as well as micro-services for specific APIs. I always enjoy making Azure Functions in Typescript with queue triggers.',
  }),
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
          slotName: 'header',
          component: 'iff-title',
          props: [{level: '4'}],
          innerText: 'Code Projects',
          slots: [],
        },
        {
          slotName: 'header',
          component: 'iff-icon-text',
          props: [{event: 'Intro'}],
          innerText: '',
          slots: [
            {
              slotName: 'text',
              component: 'iff-text',
              props: [{styling: 'paragraph'}],
              innerText: 'Overview',
              slots: [],
            },
          ],
        },
        {
          slotName: 'body',
          component: 'iff-slim-layout',
          props: [],
          slots: [
            {
              slotName: '',
              component: 'iff-card',
              props: [
                {
                  imageSrc: 'images/blocks.jpeg',
                },
                {backgroundColor: '--iff-alias__color--accent-one'},
                {event: 'JsonToLit'},
              ],
              slots: [
                {
                  slotName: 'title',
                  component: 'iff-title',
                  props: [{level: '4'}],
                  innerText: 'JSON to Lit (Webcomponents)',
                  slots: [],
                },
                {
                  slotName: 'lead',
                  component: 'iff-text',
                  props: [{styling: 'paragraph-slim'}],
                  innerText:
                    'Input JSON to generate Lit Webcomponents. Can be useful for headless CMS Systems or Design Systems.',
                  slots: [],
                },
              ],
            },
            {
              slotName: '',
              component: 'iff-card',
              props: [
                {imageSrc: 'images/line_down.jpeg'},
                {backgroundColor: '--iff-alias__color--accent-two'},
              ],
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
                    'A small design system built with Lit Webcomponents with CSS and Slot Stacking',
                  slots: [],
                },
              ],
            },
            {
              slotName: '',
              component: 'iff-card',
              props: [
                {imageSrc: 'images/round_block.jpeg'},
                {backgroundColor: '--iff-alias__color--accent-three'},
              ],
              slots: [
                {
                  slotName: 'title',
                  component: 'iff-title',
                  props: [{level: '4'}],
                  innerText: 'Flyby-Test Suite',
                  slots: [],
                },
                {
                  slotName: 'lead',
                  component: 'iff-text',
                  props: [{styling: 'paragraph-slim'}],
                  innerText:
                    'Integration API Test Suite to automate Regression tests.',
                  slots: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
