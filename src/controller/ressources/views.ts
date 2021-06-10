export type viewVariants = 'Intro' | 'Slideshow' | 'Code';

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
                  component: 'iff-card',
                  props: [
                    {
                      imageSrc: 'dev/welle.png',
                    },
                    {backgroundColor: '--iff-alias__color--accent-one'},
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
                          props: [{level: 4}],
                          innerText:
                            'Culpa quis ipsum anim ullamco. In aute dolor nisi do. Non quis quis duis labore. Voluptate culpa dolor labore proident exercitation occaecat. Fugiat tempor et sunt dolore veniam minim deserunt eiusmod occaecat quis proident ad. Anim deserunt amet adipisicing qui est sint consequat anim amet consequat ex. Esse eiusmod sint quis aute tempor ullamco reprehenderit irure culpa mollit tempor elit nostrud.',
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
                      props: [],
                      slots: [
                        {
                          slotName: 'title',
                          component: 'iff-title',
                          props: [{level: 1}],
                          innerText: 'Person',
                          slots: [],
                        },
                        {
                          slotName: 'modal-text',
                          component: 'iff-title',
                          props: [{level: 4}],
                          innerText:
                            'Culpa quis ipsum anim ullamco. In aute dolo Culpa quis ipsum anim ullamco. In aute dolo Culpa quis ipsum anim ullamco. In aute dolo r nisi do. Non quis quis duis labore. Voluptate culpa dolor labore proident exercitation occaecat. Fugiat tempor et sunt dolore veniam minim deserunt eiusmod occaecat quis proident ad. Anim deserunt amet adipisicing qui est sint consequat anim amet consequat ex. Esse eiusmod sint quis aute tempor ullamco reprehenderit irure culpa mollit tempor elit nostrud.',
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
