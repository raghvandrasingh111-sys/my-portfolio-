declare module "gsap/SplitText" {
  import type { DOMTarget } from "gsap";

  export interface SplitTextVars {
    type?: string;
    linesClass?: string;
    wordsClass?: string;
    charsClass?: string;
  }

  export class SplitText {
    lines: HTMLElement[];
    words: HTMLElement[];
    chars: HTMLElement[];
    constructor(targets: DOMTarget, vars?: SplitTextVars);
    revert(): void;
  }
}
