declare module '@observablehq/runtime' {
  export class Runtime {
    constructor();
    module(notebook: any, builtins?: any): any;
  }

  export class Inspector {
    constructor(node: HTMLElement);
    fulfilled(value: any, name: string): void;
    pending(): void;
    rejected(error: Error, name: string): void;
  }
}
