import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pep-button',
  styleUrl: 'pep-button.css',
  shadow: true,
})
export class PepButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
