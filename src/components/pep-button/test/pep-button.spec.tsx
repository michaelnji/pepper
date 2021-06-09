import { newSpecPage } from '@stencil/core/testing';
import { PepButton } from '../pep-button';

describe('pep-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PepButton],
      html: `<pep-button></pep-button>`,
    });
    expect(page.root).toEqualHtml(`
      <pep-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pep-button>
    `);
  });
});
