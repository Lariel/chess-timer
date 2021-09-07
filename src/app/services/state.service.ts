import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() {
    this.iniciarState();
  }

  private state = 'chessState';

  public obterState(key?: string) {
    if (key) {
      return JSON.parse(localStorage.getItem(this.state)) ? JSON.parse(localStorage.getItem(this.state))[key] : null;
    }
    return JSON.parse(localStorage.getItem(this.state)) ? JSON.parse(localStorage.getItem(this.state)) : null;
  }

  public atualizarState(key: string, value: any) {
    const state = this.obterState();

    state[key] = value;

    this.gravarState(state);
  }

  private gravarState(state) {
    localStorage.setItem(this.state, JSON.stringify(state));
  }

  private iniciarState() {
    if (!this.obterState()) {
      const state = {};
      localStorage.setItem(this.state, JSON.stringify(state));
    }
  }

  public resetarState() {
    localStorage.removeItem(this.state);
    const state = {};
    localStorage.setItem(this.state, JSON.stringify(state));
  }
}
