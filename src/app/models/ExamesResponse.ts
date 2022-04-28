
export class ExamesResponse {
  id: string;
  nome: string;

  constructor(exame) {
    this.id = exame.id;
    this.nome = exame.nome;
  }
}
