import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Partida } from 'src/app/model/iPartida';
import { HistoricoService } from 'src/app/services/historico.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-configurar-jogo',
  templateUrl: './configurar-jogo.component.html',
  styleUrls: ['./configurar-jogo.component.css']
})
export class ConfigurarJogoComponent implements OnInit {

  constructor(
    private router: Router,
    private titleService: Title,
    private historico: HistoricoService
  ) { }

  tempoMaximoMinutos;
  tempoMaximoSegundos;
  historicoPartidas: Partida[];

  ngOnInit(): void {
    this.historicoPartidas = this.historico.buscarHistorico();
  }

  confirmarTempo = () => {
    if (this.tempoMaximoMinutos > 0) {
      this.tempoMaximoSegundos = this.converterMinutosParaSegundos(this.tempoMaximoMinutos);
      this.router.navigate(['/jogo'], { queryParams: {
          timer: this.tempoMaximoSegundos
        }
      });
      this.historico.atualizarHistorico({
        tempoMaximoMinutos: this.tempoMaximoMinutos,
        tempoMaximoSegundos: this.tempoMaximoSegundos
      });
      this.titleService.setTitle('Jogando - Cronômetro Xadrez');
    }
  }

  selecionarTempoDoHistorico = (tempoMaximoMinutos) => {
    this.tempoMaximoMinutos = tempoMaximoMinutos;
    this.confirmarTempo();
  }

  converterMinutosParaSegundos = (t: number): number => {
    return t * 60;
  }

}
