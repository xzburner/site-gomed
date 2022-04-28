import { ScrollingModule } from "@angular/cdk/scrolling";
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { MatCarouselHammerConfig, MatCarouselModule } from "@ngbmodule/material-carousel";
import { IconModule } from '@visurel/iconify-angular';
import { MatSelectFilterModule } from 'mat-select-filter';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { NgxMaskModule } from 'ngx-mask';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { ContainerModule } from 'src/@vex/directives/container/container.module';
import { VexModule } from '../@vex/vex.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { BuscarEspecialidadeComponent } from './pages/especialidades/buscar-especialidade/buscar-especialidade.component';
import { BuscaComponent } from './pages/home/busca/busca.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/home/info/info.component';
import { ParceirosComponent } from './pages/home/parceiros/parceiros.component';
import { RecomendacoesComponent } from './pages/home/recomendacoes/recomendacoes.component';
import { LoginComponent } from './pages/login/login.component';
import { PainelComponent } from './pages/painel/painel.component';
import { InfoParaVoceComponent } from "./pages/para-voce/info/info-para-voce.component";
import { ParaVoceComponent } from './pages/para-voce/para-voce.component';
import { SegurancaComponent } from './pages/seguranca/seguranca.component';
import { InfoParceiroComponent } from './pages/seja-parceiro/info/info-parceiro.component';
import { SejaParceiroComponent } from './pages/seja-parceiro/seja-parceiro.component';
import { CardEspecialidadesComponent } from "./utils/card-especialidades/card-especialidades.component";
import { CardInformativoComponent } from './utils/card-informativo/card-informativo.component';
import { LoadComponent } from './utils/load/load.component';
import { MomentUtcDateAdapter } from './utils/MomentUtcDateAdapter';
import { SlickCarouselModule } from 'ngx-slick-carousel';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadComponent,
    HomeComponent,
    BuscaComponent,
    InfoComponent,
    RecomendacoesComponent,
    ParceirosComponent,
    PainelComponent,
    CardInformativoComponent,
    SejaParceiroComponent,
    InfoParceiroComponent,
    SegurancaComponent,
    ParaVoceComponent,
    InfoParaVoceComponent,
    CardEspecialidadesComponent,
    BuscarEspecialidadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    IconModule,
    MatTooltipModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    CommonModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    IconModule,
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    ContainerModule,
    MatSelectModule,
    MatButtonToggleModule,
    ScrollingModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaskModule.forRoot(),
    MatFormFieldModule,
    //MatCarouselModule.forRoot(),
    MatCardModule,

    // Vex
    VexModule,
    CustomLayoutModule,
    MatSelectFilterModule,

    //Mdb
    MdbCarouselModule,

    //Slicker
    SlickCarouselModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentUtcDateAdapter },
    //{ provide: HAMMER_GESTURE_CONFIG, useClass: MatCarouselHammerConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
