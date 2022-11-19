import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { ListadoNoticiasComponent } from './components/listado-noticias/listado-noticias.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulariosComponent,
    ListadoNoticiasComponent,
    NavbarComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
