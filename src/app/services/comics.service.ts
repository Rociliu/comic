import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  db_url: string = "http://localhost:3000/comics"; //creo esta variable (db_url) que es la ruta a la que le haré las peticiones

  constructor(private http: HttpClient) {}  //En el constructor pongo este módulo dentro de los paréntesis para indicar que es una petición http
  //para que no me de error, debo importar HttpClientModule en el app.module

  //creo la variable con los datos de mi formulario:
public comicData= {
  author: '',
  company: '',
  cover:'',
  id:'',
  title:''
}



  //Creo una función que me devuelva los datos que hay en la variable db_url, es decir los datos de la url a la que voy a hacer mis peticiones 
  getComics() {
    return this.http.get(this.db_url)
  }

  //creo la función para el comic individual, que es un id porque sólo obtiene un comic y retornará la url donde hago la petición más el id que necesito
    getComic(id:number) {
    return this.http.get(`${this.db_url}/${id}`) //Después de hacer esto, vuelvo a comic.ts a terminar la función OnInit
  }

  //creo la función para borrar el comic
    deleteComic(id:number) {
      return this.http.delete(`${this.db_url}/${id}`) //con esta función me elimina el comic también del back
    }

  //creo una función para meter mi nuevo comic dentro de mi json
  postComic(comic : any){
    return this.http.post(this.db_url, comic) //Aquí digo que a la url le voy a añadir un comic
  }

}
