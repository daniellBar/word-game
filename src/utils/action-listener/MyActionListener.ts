import type { Listener } from "./types";

export class MyActionListener {
  private actions: Map<string, Listener[]>;

  constructor() {
    this.actions = new Map();
  }

  registerListener(action: string, listener: Listener) {
    if (!this.actions.has(action)) {
      this.actions.set(action, []);
    }
    this.actions.get(action)!.push(listener);
  }

  removeListener(action: string) {
    this.actions.delete(action);
  }

  // made it an arrow function to avoid bind when passed as prop
  emit = (action: string, data: any) => {
    if (!this.actions.has(action)) {
      throw new Error(`Can't emit an event. Event "${action}" doesn't exist.`);
    }
    this.actions.get(action)!.forEach((listener) => {
      listener(data);
    });
  };
}
