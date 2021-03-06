import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { AboutComponent } from './about/about.component';
import { ChangeThemeComponent } from './change-theme/change-theme.component';

@NgModule({
  declarations: [
    AppComponent,
    CompOneComponent,
    HeaderComponent,
    AsideComponent,
    AboutComponent,
    ChangeThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


