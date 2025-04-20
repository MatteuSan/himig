/*
 * @license
 * Copyright (c) 2025 MatteuSan
 * SPDX-License-Identifier: MIT
 */

import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('ms-form-field')
export default class MSFormField extends LitElement {
  label: string;
  name: string
  type: string;
  placeholder?: string;
  helper?: string;
  value?: string;
  isDisabled?: boolean = false;
  isRequired?: boolean = false;
  isReadonly?: boolean = false;

  constructor() {
    super();
    this.placeholder = this.label;
  }

  override render(): TemplateResult<1> {
    return html`
      <label class="ms-form-field">
        <span class="label">${ this.label }</span>
        <input 
          type="${this.type}" 
          class="input" 
          placeholder="${this.placeholder}" 
          name="${this.name}" 
          disabled="${this.isDisabled}" 
          required="${this.isRequired}" 
          readonly="${this.isReadonly}" 
        />
        ${ this.helper ? html`<span class="helper">Helper Text</span>` : '' }
      </label>
    `;
  };
}