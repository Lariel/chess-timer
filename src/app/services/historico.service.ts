import { Injectable } from '@angular/core';
import { Partida } from '../model/iPartida';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  constructor(
    private state: StateService
  ) { }

  public atualizarHistorico(partida: Partida): void {
    const historico: Partida[] = this.state.obterState('historico') ? this.state.obterState('historico') : [];

    if (historico.every(p => p.tempoMaximoMinutos !== partida.tempoMaximoMinutos)) {
      historico.push(partida);
    }

    this.state.atualizarState('historico', historico);
  }

  public buscarHistorico(): Partida[] {
    return this.state.obterState('historico') ? this.state.obterState('historico') : [];
  }
}
