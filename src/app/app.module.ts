import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { NavComponent } from './core/nav/nav.component';
import { FooterComponent } from './core/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ComicComponent } from './pages/comic/comic.component'; //pongo esto parque abajo he importado HttpClientModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './pages/gestion/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComicsComponent,
    GestionComponent,
    NavComponent,
    FooterComponent,
    ComicComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //He importado este módulo para que las peticiones que hago desde comic.service.ts funcionen

    //importo los módulos para el formulario:
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
