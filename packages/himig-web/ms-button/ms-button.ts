/*
 * @license
 * Copyright (c) 2024 MatteuSan
 * SPDX-License-Identifier: MIT
 */

import { html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from './styles/ms-button.styles';

@customElement('ms-button')
export default class MSButton extends LitElement {
  @property() type?: string;
  @property() nativeType?: string;
  @property() link?: string;
  @property() isDisabled?: boolean;
  @property() onClick?: () => void;

  @property() a11tyLabel?: string;

  static override styles = styles;

  private handleTypes(types: string): string {
    const finalTypes: string[] = [];
    types.split(' ').forEach((type: string) => finalTypes.push(`is-${type}`));
    return finalTypes.join(' ');
  }

  private handleLinkTarget(link: string): '_self'|'_blank' {
    const url: URL = new URL(link);
    if (url.hostname !== window.location.hostname) return '_blank';
    return '_self';
  }

  protected override render() {
    const BaseButton: TemplateResult = html`
      <i class="ms-button__icon">
        <slot name="icon"></slot>
      </i>
      <span class="ms-button__label">
        <slot></slot>
      </span>
    `;

    if (!this.link) {
      return html`
        <button 
          class="${this.type ? this.handleTypes(this.type) : ''}"
          @click="${this.onClick}"
        >
          ${BaseButton}
        </button>
      `;
    }

    return html`
      <a 
        href="${this.link}" 
        target="${this.handleLinkTarget(this.link)}" 
        class="${this.type ? this.handleTypes(this.type) : ''}"
      >
        ${BaseButton}
      </a>
    `;
  }
}