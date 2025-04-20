/*
 * @license
 * Copyright (c) 2025 MatteuSan
 * SPDX-License-Identifier: MIT
 */

import { MSComponent } from './types/ms-component';
import { accessProperty } from './component-properties';

export class MSComponentBase {

  protected GS_TARGET_COMPONENT: Element | HTMLElement | null;
  protected GS_REFERENCE_COMPONENT: MSComponent;
  protected GS_CUSTOM_PROPERTIES: string[];
  private readonly GS_COMPONENT_NAME: string;

  constructor(
    targetComponent: Element | HTMLElement | null,
    referenceComponent: MSComponent,
    customProperties: string[],
  ) {
    this.GS_TARGET_COMPONENT = targetComponent;
    this.GS_REFERENCE_COMPONENT = referenceComponent;
    this.GS_CUSTOM_PROPERTIES = customProperties;
    this.GS_COMPONENT_NAME = this.GS_REFERENCE_COMPONENT.substring(3);
  }

  addClass(className: string): void {
    this.GS_TARGET_COMPONENT?.classList.add(className);
  }

  removeClass(className: string): void {
    this.GS_TARGET_COMPONENT?.classList.remove(className);
  }

  hasClass(className: string): boolean {
    return this.GS_TARGET_COMPONENT?.classList.contains(className) ?? false;
  }

  getClasses(): DOMTokenList|undefined {
    return this.GS_TARGET_COMPONENT?.classList;
  }

  getComponent(): Element|HTMLElement|null {
    return this.GS_TARGET_COMPONENT;
  }

  getReference(): MSComponent {
    return this.GS_REFERENCE_COMPONENT;
  }

  getCustomProperty(query: string): string {
    const prop: string = this.GS_CUSTOM_PROPERTIES[this.GS_CUSTOM_PROPERTIES.indexOf(query)];
    return accessProperty(`${this.GS_COMPONENT_NAME}-${prop}`);
  }

  getCustomProperties(): string[] {
    return this.GS_CUSTOM_PROPERTIES;
  }

  getId(): string|undefined {
    return this.GS_TARGET_COMPONENT?.id;
  }

}