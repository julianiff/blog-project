import {ReactiveControllerHost} from 'lit';
import {directive, Directive} from 'lit/directive.js';
import {transformJsonToLit} from './transformJsonToLit';

export class BuildViewsController {
  host: ReactiveControllerHost;
  renderViews: any;

  views = [
    {
      component: 'iff-page-layout',
      props: [{theme: 'light'}, {test: 'farm'}],
      innerText: '',
      slots: [
        {
          slotName: 'body',
          component: 'iff-split',
          props: [],
          slots: [
            {
              slotName: 'start-text',
              component: 'iff-link',
              props: [{href: 'dev/projects'}],
              slots: [
                {
                  slotName: '',
                  component: 'iff-title',
                  props: [{level: 1}],
                  innerText: 'Projects',
                  slots: [],
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
                  component: 'iff-title',
                  props: [{level: 1}],
                  innerText: 'Projects',
                  slots: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  constructor(host: ReactiveControllerHost) {
    this.host = host;

    this.renderViews = directive(MaxDirective)(this.views);
  }

  hostConnected() {}

  hostDisconnected() {}
}

class MaxDirective extends Directive {
  render(input: any) {
    return transformJsonToLit(input);
  }
}
