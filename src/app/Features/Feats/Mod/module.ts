import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Manager } from './manager';
import { Service } from './service';

import { UIComponent } from './components';

@NgModule({
  declarations: [UIComponent],
  imports: [
    CommonModule
  ],
  providers: [ Manager, Service ],
  entryComponents: [UIComponent],
  exports: [ UIComponent ]
})
export class Module { }
