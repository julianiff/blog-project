var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import './Navigation';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { OffsetController } from '../controller/offset-controller';
/**
 * Text Styling Component
 *
 * @slot - This element has a slot
 */
let Header = class Header extends LitElement {
    constructor() {
        super();
        this.offsetController = new OffsetController(this);
        this.position = 0;
    }
    render() {
        this.position = this.offsetController.offsetTop || 0;
        return html `<slot></slot> `;
    }
};
Header.styles = css `
    :host {
      position: sticky;
      top: 0;
      width: 100%;
      z-index: 100;
      height: var(--iff-alias__header--height);
      padding: 0px var(--iff-dynamic__navigation--indent);
      border-bottom: 2px solid var(--iff-alias__color--positive);
      background-color: var(--iff-alias__body--background-color);
      transition: border-bottom var(--iff-alias__transition--intervall);
    }

    :host([position='0']) {
      border-bottom: 0px solid var(--iff-alias__color--positive);
      transition: border-bottom var(--iff-alias__transition--intervall);
    }
  `;
__decorate([
    property({ reflect: true, type: Number }),
    __metadata("design:type", Number)
], Header.prototype, "position", void 0);
Header = __decorate([
    customElement('iff-header'),
    __metadata("design:paramtypes", [])
], Header);
export { Header };
// function log(val: number) {
//   return function (
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     console.log(target, propertyKey, descriptor, val);
//   };
// }
// export class Tracking {
//   tracking?: string;
// }
// function logClass(message: string): ClassDecorator {
//   console.log(`${message} evaluated`);
//   return function (constructor: Function): void {
//     console.log(`${message} called`);
//     console.log(Object.values(constructor));
//   };
// }
//# sourceMappingURL=Header.js.map