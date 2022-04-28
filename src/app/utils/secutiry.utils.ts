import { Usuario } from "../models/Usuario";

export class Security {
    public static set(user: Usuario, token: string) {
        const data = JSON.stringify(user);
        localStorage.setItem('gomedusuario', btoa(data));
        localStorage.setItem('gomedtoken', token);
    }

    public static setUser(user: Usuario) {
        const data = JSON.stringify(user);
        localStorage.setItem('gomedusuario', btoa(data));
    }

    public static setToken(token: string) {
        localStorage.setItem('gomedtoken', token);
    }

    public static getUser(): Usuario {
        const data = localStorage.getItem('gomedusuario');
        if (data) {
            return JSON.parse(atob(data));
        } else {
            return null;
        }
    }

    public static getToken(): string {
        const data = localStorage.getItem('gomedtoken');
        if (data) {
            return data;
        } else {
            return null;
        }
    }

    public static hasToken(): boolean {
        if (this.getToken())
            return true;
        else
            return false;
    }

    public static clear() {
        localStorage.removeItem('gomedusuario');
        localStorage.removeItem('gomedtoken');
    }
}
