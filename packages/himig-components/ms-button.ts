/*
 * @license
 * Copyright (c) 2024 MatteuSan
 * SPDX-License-Identifier: MIT
 */

import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ifDefined } from 'lit/directives/if-defined.js';
import { styles } from './styles/ms-button/ms-button.styles';

@customElement('ms-button')
export default class MSButton extends LitElement {
  @property({ type: String }) type?: string;
  @property({ type: String }) nativeType?: string;
  @property({ type: String }) link?: string;
  @property({ type: String }) a11tyLabel?: string;
  @property({ type: Boolean }) isDisabled?: boolean = false;
  @property({ type: Function }) onClick?: () => void;

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

  private renderBase() {
    return html`
      <i class="icon">
        <slot name="icon"></slot>
      </i>
      <span class="label">
        <slot></slot>
      </span>
    `;
  }

  override render() {
    if (!this.link) {
      return html`
        <button 
          class="ms-button${this.type ? ' ' + this.handleTypes(this.type) : ''}"
          @click="${this.onClick}"
          aria-label="${ifDefined(this.a11tyLabel)}"
          ?disabled="${this.isDisabled}"
        >
          ${this.renderBase()}
        </button>
      `;
    }

    return html`
      <a 
        href="${this.link}" 
        target="${this.handleLinkTarget(this.link)}" 
        class="ms-button${this.type ? ' ' + this.handleTypes(this.type) : ''}"
        aria-label="${ifDefined(this.a11tyLabel)}"
      >
        ${this.renderBase()}
      </a>
    `;
  }
}

// customElements.define('ms-button', MsButton);