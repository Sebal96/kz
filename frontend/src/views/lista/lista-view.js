import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import '@vaadin/vaadin-split-layout/vaadin-split-layout.js';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-column.js';
import '@vaadin/vaadin-form-layout/vaadin-form-layout.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-date-picker';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout.js';

class ListaView extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          height: 100%;
        }
      </style>

      <vaadin-split-layout style="width: 100%; height: 100%;">
        <div style="flex-grow:1;width:100%;" id="grid-wrapper">
          <slot name="grid"></slot>
        </div>
        <div style="width:400px;display:flex;flex-direction:column;">
          <div style="padding:var(--lumo-space-l);flex-grow:1;">
            <vaadin-form-layout>
              <vaadin-text-field label="Imie" id="firstName"></vaadin-text-field><vaadin-text-field label="Last name" id="lastName"></vaadin-text-field><vaadin-text-field label="Email" id="email"></vaadin-text-field><vaadin-text-field label="Phone" id="phone"></vaadin-text-field><vaadin-date-picker label="Date of birth" id="dateOfBirth"></vaadin-date-picker><vaadin-text-field label="Occupation" id="occupation"></vaadin-text-field><vaadin-checkbox id="important" style="padding-top: var(--lumo-space-m);"
            >Important</vaadin-checkbox
          >
            </vaadin-form-layout>
          </div>
          <vaadin-horizontal-layout
            style="flex-wrap:wrap;width:100%;background-color:var(--lumo-contrast-5pct);padding:var(--lumo-space-s) var(--lumo-space-l);"
            theme="spacing"
          >
            <vaadin-button theme="primary" id="save">Save</vaadin-button>
            <vaadin-button theme="tertiary" slot="" id="cancel">Cancel</vaadin-button>
          </vaadin-horizontal-layout>
        </div>
      </vaadin-split-layout>
    `;
  }

  static get is() {
    return 'lista-view';
  }

  static get properties() {
    return {
      // Declare your properties here.
    };
  }
}

customElements.define(ListaView.is, ListaView);
