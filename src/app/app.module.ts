import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './Pages/wrapper/wrapper.component';
import { BaseComponent } from './Pages/base/base.component';
import { OtherComponent } from './Pages/other/other.component';
import { ListAComponent } from './Components/list-a/list-a.component';
import { ListBComponent } from './Components/list-b/list-b.component';
import { AdministrableFeaturesModule, FeaturesModules } from './Features';
import { ConfigBaseService } from './Services/config-base.service';
import { FeatureManagerResolver } from './Services/feature-manager-resolver.service';
import { Manager } from './Features/Feats/Mod/manager';


@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    BaseComponent,
    OtherComponent,
    ListAComponent,
    ListBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdministrableFeaturesModule,
    FeaturesModules
  ],
  providers: [ConfigBaseService, FeatureManagerResolver, Manager],
  bootstrap: [AppComponent]
})
export class AppModule { }
