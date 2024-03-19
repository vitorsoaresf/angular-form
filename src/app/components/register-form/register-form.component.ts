import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  registerForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.min(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(8)]),
  });

  onSubmit() {
    if (this.registerForm.status === 'VALID') {
      console.log(this.registerForm.value);
      this.registerForm.reset({ password: '' });
    } else {
      alert('Dados informados inválido, preencha os campos corretamente');
    }
  }
}
