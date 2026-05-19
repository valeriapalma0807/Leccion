import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false,
})
export class InicioPage implements OnInit {
estudiante ={
  nombre: '',
  correo: '',
  carrera: '',
  semestre:''
}
  constructor() { }

  ngOnInit() {
  }
  onSubmit(formulario: NgForm){
    console.log('================================');
    console.log('submit');
    console.log(this.estudiante);
    console.log(formulario);
    console.log('Estudiante Reguistrado');
  }

}
