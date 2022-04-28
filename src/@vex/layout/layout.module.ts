import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { ProgressBarModule } from '../components/progress-bar/progress-bar.module';
import { SearchModule } from '../components/search/search.module';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    ProgressBarModule,
    SearchModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule {
}
