import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SSOComponent } from './sso.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'sso', component: SSOComponent }
  ])],
  exports: [RouterModule]
})
export class SSORoutingModule {}
