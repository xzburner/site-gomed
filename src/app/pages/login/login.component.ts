import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { Login } from 'src/app/models/Login';
import { PacienteResponse } from 'src/app/models/PacienteResponse';
import { Usuario } from 'src/app/models/Usuario';
import { CommonService } from 'src/app/services/common.service';
import { Security } from 'src/app/utils/secutiry.utils';
import { MessagesSnackBar } from 'src/app/_constants/messages-snack-bar';
import { BaseRoutsEnum } from './../../_constants/baseConstants';

@Component({
  selector: 'vex-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInUp400ms
  ]
})

export class LoginComponent implements OnInit {
  objRequest: Login;
  form: FormGroup;

  inputType = 'password';
  visible = false;
  load: boolean = false;
  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;

  constructor(private router: Router,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private snackBar: MatSnackBar,
    private commonService: CommonService,
  ) { }

  ngOnInit() {
    let user = Security.getUser();
    if (user != undefined) this.router.navigate(['/']);
    this.form = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  login() {
    this.objRequest = this.form.value;
    this.load = true;
    this.commonService.postWithOutHeader(BaseRoutsEnum.AUTHENTICATE, this.objRequest).subscribe(
      (data: any) => {
        this.snackBar.open(MessagesSnackBar.LOGIN, "Fechar", {
          duration: 10000,
        });
        this.form.reset();
        let perfil = data.body.data.role

        let objUser = new Usuario(data.body.data.id,
          data.body.data.email,
          data.body.data.dataExpiracao,
          perfil.length < 1 ? null : perfil[0],
          data.body.data.name,
          "",
          "",
          "",
          new PacienteResponse()
        )
        this.setUser(objUser, data.body.data.accessToken);
        this.load = false;
      },
      (error) => {
        console.log(error.message);
        let messageConcat = '';
        if (error.error.errors != undefined && error.error.errors.length > 0) {
          for (var i = 0; i < error.error.errors.length; i++) {
            messageConcat += error.error.errors[i] + ", ";
          }
        } else messageConcat = error.message;
        this.snackBar.open(
          MessagesSnackBar.EDITADO_ERRO + messageConcat,
          "Fechar",
          { duration: 40000 }
        );
        this.load = false;
      }
    );

  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }

  setUser(user: Usuario, token: string) {
    this.load = true;
    this.commonService.getById(BaseRoutsEnum.GETPACIENTE, user.id).subscribe((response) => {
      user.paciente = response.body.data;
      this.load = false;
      Security.set(user, token);
      window.location.reload();
    });

  }

}
