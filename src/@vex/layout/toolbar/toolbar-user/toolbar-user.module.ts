import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { IconModule } from '@visurel/iconify-angular';
import { RelativeDateTimeModule } from '../../../pipes/relative-date-time/relative-date-time.module';
import { ToolbarUserDropdownComponent } from './toolbar-user-dropdown/toolbar-user-dropdown.component';
import { ToolbarUserComponent } from './toolbar-user.component';


@NgModule({
  declarations: [ToolbarUserComponent, ToolbarUserDropdownComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatRippleModule,
    MatMenuModule,
    MatButtonModule,
    RelativeDateTimeModule,
    RouterModule,
    MatTooltipModule,
    IconModule
  ],
  exports: [ToolbarUserComponent],
  entryComponents: [ToolbarUserDropdownComponent]
})
export class ToolbarUserModule {
}

