import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { BuscarEspecialidadeComponent } from './pages/especialidades/buscar-especialidade/buscar-especialidade.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PainelComponent } from './pages/painel/painel.component';
import { ParaVoceComponent } from './pages/para-voce/para-voce.component';
import { SegurancaComponent } from './pages/seguranca/seguranca.component';
import { SejaParceiroComponent } from './pages/seja-parceiro/seja-parceiro.component';


const routes: Routes = [

  {
    path: '',
    component: CustomLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'painel', component: PainelComponent },
      { path: 'seja-parceiro', component: SejaParceiroComponent },
      { path: 'seguranca', component: SegurancaComponent },
      { path: 'para-voce', component: ParaVoceComponent },
      { path: 'contato', component: ContatoComponent },
      { path: 'login', component: LoginComponent },
      { path: 'buscar-especialidade', component: BuscarEspecialidadeComponent },
      {
        path: 'calendar',
        loadChildren: () => import('./pages/calendar/calendar.module').then(m => m.CalendarModule),
        data: {
          toolbarShadowEnabled: true
        }
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
