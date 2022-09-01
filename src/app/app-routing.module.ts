import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParamKeys } from './Models/defaults';
import { BaseComponent } from './Pages/base/base.component';
import { OtherComponent } from './Pages/other/other.component';
import { WrapperComponent } from './Pages/wrapper/wrapper.component';
import { FeatureManagerResolver } from './Services/feature-manager-resolver.service';

const BASE_ROUTE = 'base';
const OTHER_ROUTE = 'other';



const routes: Routes = [{
  path: '',
  component: WrapperComponent,
  children: [
    { path: '', redirectTo: `${BASE_ROUTE}/mod`, pathMatch: 'full' },
    {
      path: `${BASE_ROUTE}/:${ParamKeys.Type}`,
      component: BaseComponent,
      resolve: { featureManager: FeatureManagerResolver }
    },
    {
      path: `${OTHER_ROUTE}/:${ParamKeys.Type}`,
      component: OtherComponent,
      resolve: { featureManager: FeatureManagerResolver },
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
