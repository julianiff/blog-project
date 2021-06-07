import {ReactiveController, ReactiveControllerHost} from 'lit';
import {directive, Directive} from 'lit/directive.js';
import {transformJsonToLit} from './transformJsonToLit';
import {UpdateControllerConnectedEvent} from './UpdateControllerConnectedEvent';

export class BuildViewsController implements ReactiveController {
  host: ReactiveControllerHost;
  renderViews: any;

  views = [
    {
      component: 'iff-page-layout',
      props: [{theme: 'light'}, {test: 'farm'}],
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
              props: [{href: 'dev/projects'}],
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
  ];

  views2 = [
    {
      component: 'iff-page-layout',
      props: [{theme: 'light'}, {test: 'farm'}],
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
  ];

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    host.addController(this);

    this.renderViews = directive(RenderContent)(this.views);
  }

  hostConnected() {
    window.addEventListener(
      UpdateControllerConnectedEvent.eventName,
      () => {
        this.renderViews = directive(RenderContent)(this.views2);

        console.log('something happened');
        this.host.requestUpdate();
      },
      false
    );
  }

  hostDisconnected() {
    window.removeEventListener(
      UpdateControllerConnectedEvent.eventName,
      () => {
        this.renderViews = directive(RenderContent)(this.views2);

        console.log('something happened');
        this.host.requestUpdate();
      },
      false
    );
  }
}

class RenderContent extends Directive {
  render(input: any) {
    return transformJsonToLit(input);
  }
}
