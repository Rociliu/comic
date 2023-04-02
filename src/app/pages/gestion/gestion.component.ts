import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms' //esto lo importamos a mano para que no de errores
import { Router } from '@angular/router' //si no meto esto aquí me dará error la función onSubmit
import { ComicsService } from 'src/app/services/comics.service';
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {
  comicForm! : FormGroup; //para que no me de error tengo que importarlo arriba
  constructor(
    private formBuilder: FormBuilder, 
    private miServicioComic:ComicsService,
    private router: Router //meto esto aquí porque en la función onSubmit lo llamo
    ) {}

  //ponemos por defecto una información que me va a traer el servicio:

  public newComic = this.miServicioComic.comicData;
  public newComicId = this.miServicioComic.comicData.id;


ngOnInit(): void {
  //con esto decimos cómo se tiene que construir el formulario
  this.comicForm = this.formBuilder.group({
    //pongo todos los datos que he pintado en el html menos el id
    title:[
      this.newComic.title,
       [Validators.required, Validators.minLength(2)]
      ],
    author:[
      this.newComic.author, 
      [Validators.required, Validators.minLength(2)]
    ],
    cover:[
      this.newComic.cover, 
      [Validators.required]
    ],
    company:[
      this.newComic.company, 
      [Validators.required, Validators.minLength(2)]
    ],
  });
    //Con esto de abajo actualizamos los cambios:
  //Aquí dentro de onInit,le digo que los cambios que voy a hacer en el formulario, los subscriba y se los de al nuevo comic: 
  this.comicForm.valueChanges.subscribe(changes => {
    this.newComic = changes
  })
}

onSubmit() {
  //console.log(this.newComic)
  this.miServicioComic.postComic(this.newComic).subscribe((data) => {
    this.router.navigate(['/comics'])
  })

 //para resetear el formulario 
 this.comicForm.reset();
}

}
