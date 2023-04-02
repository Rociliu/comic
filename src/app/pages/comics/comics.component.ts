import { ComicsService } from './../../services/comics.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent {
    comicList : any [] = [];


//para traerme la información que necesito, tengo que llamar a mi servicio en el constructor
  constructor(private miServicioComic:ComicsService) {} //así me estoy trayendo los datos de la url que he metido en mi servicio



  ngOnInit(): void {
    this.miServicioComic.getComics().subscribe((data:any) => {
      console.log(data)
      this.comicList= [...data] 
    })
  }
//1. En el ngOnInit, digo que mi servicio me traiga el objeto que necesito(getComics) y tengo que suscribir los cambios que haga la función
//2. le digo que suscriba los datos(data) y, para que no me de errores, le pongo any.(Según Jose se pone así normalmente. "Hay que ser muy pro para tiparlo con todos los datos que te vienen") 
//3. Compruebo en la consola que me trae los datos que quiero
//4. A la variable comicList le digo que va a ser una copia de mi data usando spreat operator

}
