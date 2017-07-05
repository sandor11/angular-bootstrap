import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdInputModule, MD_PLACEHOLDER_GLOBAL_OPTIONS } from '@angular/material';

import { SSOComponent } from './sso.component';
import { SSORoutingModule } from './sso-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdInputModule,
    SSORoutingModule
  ],
  declarations: [
    SSOComponent
  ],
  providers: [
    {provide: MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: { float: 'auto' }}
  ]
})
export class SSOModule { }
