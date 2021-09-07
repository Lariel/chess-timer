import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  umSegundo = 1000; // milisegundos
  timeout = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.tempoMaximoSegundos = this.route.snapshot.queryParamMap.get('timer');
    if (!+this.tempoMaximoSegundos) {
      this.goHome();
    }
  }

  goHome = () => {
    this.router.navigate(['/']);
    this.titleService.setTitle('Novo jogo - Cronômetro Xadrez');
  }

  trocarTimmer = () => {
    if (!this.timeout) {
      this.playSwitch();
      this.contandoAeNaoB = !this.contandoAeNaoB;
      this.contar();
    }
  }

  contar = () => {
    this.contandoAeNaoB ? (this.jogarA()) : (this.jogarB());
  }

  jogarA(): void {
    if (this.tempoAtualSegundosA >= this.tempoMaximoSegundos) {
      clearTimeout(this.timerA);
      this.timeout = true;
      this.playEnd();
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
      this.timeout = true;
      this.playEnd();
      return;
    } else {
      clearTimeout(this.timerA);
      this.tempoAtualSegundosB++;
      this.timerB = setTimeout(() => {
        this.contar();
      }, this.umSegundo);
    }
  }

  playSwitch(): void {
    const audio = new Audio('../../../assets/audio/switch.wav');
    this.playAudio(audio);
  }

  playEnd(): void {
    const audio = new Audio('../../../assets/audio/end.wav');
    this.playAudio(audio);
  }

  playAudio(audio): void {
    audio.load();
    audio.play();
  }

}
