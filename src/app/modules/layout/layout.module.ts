import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardComponent } from 'src/app/components/layout/dashboard/dashboard.component';
import { SidebarComponent } from 'src/app/components/layout/sidebar/sidebar.component';
import { TopbarComponent } from 'src/app/components/layout/topbar/topbar.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from 'src/app/components/layout/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { LayoutComponent } from './layout.component';
import { LayoutRouterActivate } from './layout-router.activate';

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FlexLayoutModule,
    MenubarModule,
    SidebarModule,
    ButtonModule,
    MenuModule,
    FormsModule,
  ],
  exports: [
    DashboardComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    LayoutComponent,
  ],
  providers: [DatePipe, LayoutRouterActivate],
})
export class LayoutModule {}
