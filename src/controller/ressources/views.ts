export type viewVariants = 'Intro' | 'Slideshow' | 'Code' | 'JsonToLit';

type ViewType = {
  [key in viewVariants]: any[];
};

export const Views: ViewType = {
  Intro: [
    {
      component: 'iff-page-layout',
      props: [],
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
          component: 'iff-third-one-layout',
          props: [],
          slots: [
            {
              slotName: 'end',
              component: 'iff-column-layout',
              props: [],
              slots: [
                {
                  slotName: '',
                  component: 'iff-title',
                  props: [{level: '4'}],
                  innerText: 'Code Projects',
                  slots: [],
                },
                {
                  slotName: '',
                  component: 'iff-card',
                  props: [
                    {
                      imageSrc: 'dev/welle.png',
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
                    {imageSrc: 'dev/welle2.png'},
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
                    {imageSrc: 'dev/go.png'},
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
            {
              slotName: 'start',
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
                      component: 'iff-title-lead',
                      props: [],
                      innerText: 'What i Like',
                      slots: [
                        {
                          slotName: 'title',
                          component: 'iff-title',
                          props: [{level: 2}],
                          innerText: 'What i Like',
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
                              props: [],
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
                              props: [],
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
                              props: [],
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
                              props: [],
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
                              props: [],
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
                              props: [],
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
                              props: [],
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
                              props: [],
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
                              props: [],
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
                              props: [],
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
                              props: [],
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
                              props: [],
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
                              props: [],
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
                              props: [],
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
                              props: [],
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
                              props: [],
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
                              props: [],
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
                          ],
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
                      component: 'iff-title-lead',
                      props: [],
                      slots: [
                        {
                          slotName: 'title',
                          component: 'iff-title',
                          props: [{level: 2}],
                          innerText: 'Who i am',
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
    },
  ],
  JsonToLit: [
    {
      component: 'iff-page-layout',
      props: [],
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
          innerText: 'Json to Lit (Webcomponents)',
          slots: [],
        },
        {
          slotName: 'header',
          component: 'iff-button',
          props: [{event: 'Intro'}],
          innerText: '',
          slots: [
            {
              slotName: '',
              component: 'iff-text',
              props: [{styling: 'label'}],
              innerText: 'Zurück',
              slots: [],
            },
          ],
        },
        {
          slotName: 'body',
          component: 'iff-text',
          props: [],
          innerText:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          slots: [],
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
          slotName: 'header',
          component: 'iff-title',
          props: [{level: '4'}],
          innerText: 'Code Projects',
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
              props: [{imageSrc: 'dev/atom.png'}],
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
              props: [{level: '1'}],
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
