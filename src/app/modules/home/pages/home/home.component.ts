import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {


  constructor(private meta: Meta, private title: Title) {
    // Para ñadir el título de la página
    this.title.setTitle('Accex Asociados - Inicio');
    // Añadir el tag de la info de la página
    // this.meta.addTag(
    //   {
    //     name: 'page.info',
    //     content: 'Información Basica'
    //   }
    // );
    // this.meta.addTags([
    //   {name: 'keywords', content: 'Calendario, Tributario, Valores de referencia'},
    //   {name: 'description', content: 'Angular Universal Example'},
    //   {name: 'robots', content: 'index, follow'}
    // ]);
    this.meta.updateTag({ name: 'keywords', content: 'Calendario, Tributario, Valores de referencia' });
    this.meta.updateTag({ name: 'description', content: 'Calendario, Tributario, Valores de referencia' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }

  ngOnDestroy(): void {
    // Quitar el tag "page.info" antes de ir a otra página, para que rastree correctamente la información
    // this.meta.removeTag('name=\'page.info\'');
    // this.meta.removeTag('name=\'keywords\'');
    // this.meta.removeTag('name=\'description\'');
    // this.meta.removeTag('name=\'robots\'');
  }

  ngOnInit(): void {
  }

}
