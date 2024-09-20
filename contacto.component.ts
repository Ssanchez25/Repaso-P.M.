import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})

export class ContactoComponent  implements OnInit {
  Contacto: FormGroup;

  constructor() {
    this.Contacto = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      correo: new FormControl('', [Validators.required, Validators.email]),
      numero: new FormControl('', Validators.required),
    });

  }
  ngOnInit() {
    
  }
  Contactoo(){
    if (this.Contacto.valid) {
      const formData = this.Contacto.value;
      console.log('Formulario de contacto', formData);
    }
  }
}