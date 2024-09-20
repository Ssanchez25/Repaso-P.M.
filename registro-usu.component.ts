import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-registro-usu',
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule],
  templateUrl: './registro-usu.component.html',
  styleUrls: ['./registro-usu.component.scss'],
})

export class RegistroUsuComponent  implements OnInit {
  RegistroUsu: FormGroup;

  constructor() {
    this.RegistroUsu = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      correo: new FormControl('', [Validators.required, Validators.email]),
      contrasena: new FormControl('', Validators.required),
      confirmarContrasena: new FormControl('', Validators.required)
    });

  }
  ngOnInit() {
    
  }
  registro(){
    if (this.RegistroUsu.valid) {
      const formData = this.RegistroUsu.value;
      console.log('Formulario de registro', formData);
    }
  }
}
