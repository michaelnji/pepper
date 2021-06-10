import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pep-button',
  styleUrl: 'pep-button.css',
  // shadow: true,
})
export class PepButton {
  render() {
    return (
      <Host>
        <button class="bg-red-700 text-red-50">
          <slot></slot>
        </button>
      </Host>
    );
  }
}
