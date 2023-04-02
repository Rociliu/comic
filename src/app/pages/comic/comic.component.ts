import { ComicsService } from './../../services/comics.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent {
  id!: number; //con ! indico que le va a la variable id le va a llegar un número pero que desconozco
  comic!: any;

  //en el constructor indico que traiga mi servicio, mis rutas activas y el router (que no sé que es)
  constructor(private miServicioComic:ComicsService, private activatedRoute: ActivatedRoute, private router: Router) {}


//en el ngOnInit le pido que de las rutas activas, con el parámetro param.Map, se suscriba a los datos y me los guarde en la variable id
ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe(params=> {
    this.id = Number(params.get('id'));
  })
//después de hacer esto me voy a comics.service.ts y creo una función para el comic individual, getComic() para poder hacer lo siguiente:
  this.miServicioComic.getComic(this.id).subscribe((data:any)=> { //aquí llamo a mi servicio que tiene la funcion dentro a la cual le pasare el id para que haga una peticion individual
    this.comic = data;
  })
}

//fuera del OnInit, meto la función para borrar el comic,(que se ha creado previamente en el servicio.ts) porque sólo qyuiero qu esta función se active al pulsar el botón
deleteComic() {
  this.miServicioComic.deleteComic(this.id).subscribe((data:any)=> { //aquí quiero que cuando elimine el comic, me navegue a otro lado, por eso le pondré el router
    this.router.navigate(["/"]);
  })
}
}
