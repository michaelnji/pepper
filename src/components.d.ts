/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PepButton {
    }
}
declare global {
    interface HTMLPepButtonElement extends Components.PepButton, HTMLStencilElement {
    }
    var HTMLPepButtonElement: {
        prototype: HTMLPepButtonElement;
        new (): HTMLPepButtonElement;
    };
    interface HTMLElementTagNameMap {
        "pep-button": HTMLPepButtonElement;
    }
}
declare namespace LocalJSX {
    interface PepButton {
    }
    interface IntrinsicElements {
        "pep-button": PepButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pep-button": LocalJSX.PepButton & JSXBase.HTMLAttributes<HTMLPepButtonElement>;
        }
    }
}
