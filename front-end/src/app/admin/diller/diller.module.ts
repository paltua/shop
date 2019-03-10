import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DillerRoutingModule } from './diller-routing.module';
import { AddEditComponent } from './add-edit/add-edit.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [AddEditComponent, ListComponent],
  imports: [
    CommonModule,
    DillerRoutingModule
  ]
})
export class DillerModule { }
