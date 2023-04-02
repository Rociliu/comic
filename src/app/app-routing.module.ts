import { ComicComponent } from './pages/comic/comic.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "comics", component: ComicsComponent},
  {path: "gestion", component: GestionComponent},
  {path: "comics/:id", component: ComicComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
