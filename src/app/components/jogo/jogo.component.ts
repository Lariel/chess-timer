import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  tempoMaximoSegundos;
  tempoAtualSegundosA = 0;
  tempoAtualSegundosB = 0;
  contandoAeNaoB = false;
  timerA;
  timerB;
  umSegundo = 1000;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.tempoMaximoSegundos = this.route.snapshot.queryParamMap.get('timer');
  }

  trocarTimmer  = () => {
    this.contandoAeNaoB = !this.contandoAeNaoB;
    this.contar();
  }

  contar = () => {
    this.contandoAeNaoB ? (this.jogarA()) : (this.jogarB());
  }

  jogarA(): void {
    if (this.tempoAtualSegundosA >= this.tempoMaximoSegundos) {
      clearTimeout(this.timerA);
      return;
    } else {
      clearTimeout(this.timerB);
      this.tempoAtualSegundosA++;
      this.timerA = setTimeout(() => {
        this.contar();
      }, this.umSegundo);
    }
  }

  jogarB(): void {
    if (this.tempoAtualSegundosB >= this.tempoMaximoSegundos) {
      clearTimeout(this.timerB);
      return;
    } else {
      clearTimeout(this.timerA);
      this.tempoAtualSegundosB++;
      this.timerB = setTimeout(() => {
        this.contar();
      }, this.umSegundo);
    }
  }

}
