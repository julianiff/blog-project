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
      ],
    },
  ],
};
