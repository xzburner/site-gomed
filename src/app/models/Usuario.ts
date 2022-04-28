import { PacienteResponse } from "./PacienteResponse";

export class Usuario {
  constructor(
    public id: string,
    public email: string,
    public tokenExpira: Date,
    public perfil: string,
    public nome: string,
    public telefone: string,
    public estado: string,
    public estadoid: string,
    public paciente: PacienteResponse) {
  }
}
