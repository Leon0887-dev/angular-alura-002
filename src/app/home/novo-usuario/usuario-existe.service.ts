import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { NovoUsuarioService } from './novo-usuario.service';
import { first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUsarioService: NovoUsuarioService) { }


  usuarioJaExiste(){

    return (control: AbstractControl) =>{
      return control.valueChanges.pipe(
        switchMap((nomeUsuario) => this.novoUsarioService.verificaUsuarioExistente(nomeUsuario)
        ),
        map((usuarioExiste)=>(usuarioExiste ? {usuarioExistente: true}: null)
        ),
        first()
      )
    }
  }
}
