import {ReactiveControllerHost} from 'lit';

export class ThemeColorController {
  constructor(host: ReactiveControllerHost) {
    host.addController(this);
  }

  hostConnected() {
    const sessionTheme = window.sessionStorage.getItem('theme');
    if (sessionTheme) {
      document.querySelector('body')?.setAttribute('theme', sessionTheme);
    }
  }
}
