import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';

import { InputTextModule } from 'primeng/inputtext';

import { CheckboxModule } from 'primeng/checkbox';


@NgModule({
  declarations: [
    SharedComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    FlexLayoutModule,
    InputTextModule,
    CalendarModule,
    TabViewModule,
    CheckboxModule,
  ],
  exports: [
  ],
})
export class SharedModule {}
