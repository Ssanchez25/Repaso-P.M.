import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent  implements OnInit {
  Login: FormGroup;

  constructor() {
    this.Login = new FormGroup({
      Usuario: new FormControl('', Validators.required),
      contrasena: new FormControl('', Validators.required)
    });

  }
  ngOnInit() {
    
  }
  Ingreso(){
    if (this.Login.valid) {
      const formData = this.Login.value;
      console.log('Formulario de ingreso', formData);
    }
  }
}