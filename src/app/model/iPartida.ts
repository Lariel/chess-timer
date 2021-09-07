export interface Partida {
  tempoMaximoMinutos: number;
  tempoMaximoSegundos: number;
  emAndamento?: boolean;
  corVencedora?: cores;
}

export enum cores {
  BRANCO = 'Branco',
  PRETO = 'Preto'
}
