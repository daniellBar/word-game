export type Listener = (data: any) => void;

export interface ActionListener {
  registerListener: (action: string, listener: Listener) => void;
  removeListener: (action: string) => void;
  emit: (action: string, data: any) => void;
}