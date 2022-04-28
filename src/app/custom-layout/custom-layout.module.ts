import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigPanelModule } from '../../@vex/components/config-panel/config-panel.module';
import { SidebarModule } from '../../@vex/components/sidebar/sidebar.module';
import { FooterModule } from '../../@vex/layout/footer/footer.module';
import { LayoutModule } from '../../@vex/layout/layout.module';
import { QuickpanelModule } from '../../@vex/layout/quickpanel/quickpanel.module';
import { SidenavModule } from '../../@vex/layout/sidenav/sidenav.module';
import { ToolbarModule } from '../../@vex/layout/toolbar/toolbar.module';
import { CustomLayoutComponent } from './custom-layout.component';


@NgModule({
  declarations: [CustomLayoutComponent],
  imports: [
    CommonModule,
    LayoutModule,
    SidenavModule,
    ToolbarModule,
    FooterModule,
    ConfigPanelModule,
    SidebarModule,
    QuickpanelModule
  ]
})
export class CustomLayoutModule {
}
