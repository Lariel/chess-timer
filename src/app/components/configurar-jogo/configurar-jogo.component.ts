import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configurar-jogo',
  templateUrl: './configurar-jogo.component.html',
  styleUrls: ['./configurar-jogo.component.css']
})
export class ConfigurarJogoComponent implements OnInit {

  constructor(
    private router: Router,
    private titleService: Title
  ) { }

  tempoMaximoMinutos;
  tempoMaximoSegundos;

  ngOnInit(): void {
  }

  confirmarTempo = () => {
    if (this.tempoMaximoMinutos > 0) {
      this.tempoMaximoSegundos = this.converterMinutosParaSegundos(this.tempoMaximoMinutos);
      this.router.navigate(['/jogo'], { queryParams: {
          timer: this.tempoMaximoSegundos
        }
      });
      this.titleService.setTitle('Jogando - Cronômetro Xadrez');
    }
  }

  converterMinutosParaSegundos = (t: number): number => {
    return t * 60;
  }

}
