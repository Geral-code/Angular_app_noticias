import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  categorias: any[] = [
    { value: 'general', nombre: 'General'},
    { value: 'business', nombre: 'Negocios'},
  ];
  
  paises: any[] = [
    { value: 'ar', nombre: 'Argentina'},
    { value: 'br', nombre: 'Brasil'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
