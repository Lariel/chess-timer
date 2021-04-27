import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configurar-jogo',
  templateUrl: './configurar-jogo.component.html',
  styleUrls: ['./configurar-jogo.component.css']
})
export class ConfigurarJogoComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  tempoMaximoMinutos;
  tempoMaximoSegundos;

  ngOnInit(): void {
  }

  confirmarTempo = () => {
    this.tempoMaximoSegundos = this.converterMinutosParaSegundos(this.tempoMaximoMinutos);
    console.log('Tempo maximo: ', this.tempoMaximoSegundos);
    this.router.navigate(['/jogo'], { queryParams: {
        timer: this.tempoMaximoSegundos
      }
    });
  }

  converterMinutosParaSegundos = (t: number): number => {
    return t * 60;
  }

}
