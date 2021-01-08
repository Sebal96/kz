import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

class PowitanieView extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
      </style>

      <div>Content placeholder</div>
    `;
  }

  static get is() {
    return 'powitanie-view';
  }
}

customElements.define(PowitanieView.is, PowitanieView);
