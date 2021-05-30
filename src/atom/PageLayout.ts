 import {LitElement, html, css} from 'lit';
 import {customElement} from 'lit/decorators.js';
 
 /**
  * An example element.
  *
  * @slot - This element has a slot
  */
 @customElement('iff-page-layout')
 export class PageLayout extends LitElement {
   static styles = css`
    :host {
       display: flex;
       flex-direction: column;
       background-color: green;
     }
   `;
 
   render() {
     return html`
       <slot></slot>
     `;
   }
 }
 
 declare global {
   interface HTMLElementTagNameMap {
     'iff-page-layout': PageLayout;
   }
 }
 