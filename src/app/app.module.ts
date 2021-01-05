import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { HeaderComponent } from './paginas/principal/header/header.component';
import { CamillasComponent } from './paginas/principal/camillas/camillas.component';
import { FooterComponent } from './paginas/principal/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    CamillasComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
