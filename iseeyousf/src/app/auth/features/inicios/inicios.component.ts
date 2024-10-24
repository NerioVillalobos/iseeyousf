import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { hasEmailError, isRequired } from '../../utils/validators';
import { AuthService } from '../../data-access/auth.service';
import { toast } from 'ngx-sonner';
import { Router, RouterLink } from '@angular/router';
import { GoogleButtonComponent } from '../../ui/google-button/google-button.component';

export interface FormInicios {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-inicios',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink, GoogleButtonComponent],
  templateUrl: './inicios.component.html',
  styleUrl: './inicios.component.scss'
})
export default class IniciosComponent {
  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);
  private _router = inject(Router);

 isRequired(field: 'email' | 'password') {
    return isRequired(field, this.form);
  }

  hasEmailError(){
    return hasEmailError(this.form);
  }

  form = this._formBuilder.group<FormInicios>({

    email: this._formBuilder.control('', [Validators.required, Validators.email]),
    password: this._formBuilder.control('', Validators.required),
  });

 async submit (){
    if(this.form.invalid) return;

    try {
      const {email, password } = this.form.value;

    if (!email || !password) return;


     await this._authService.signIn({ email , password });

     toast.success('Hola Nuevamente');

     this._router.navigateByUrl('/tareas');

    } catch (error) {
        toast.error ('Error al Ingresar');
    }

    }

    async submitWithGoogle() {
      try {
        await this._authService.signInWithGoogle();
        toast.success('Bienvenido');

     this._router.navigateByUrl('/tareas');

      } catch (error) {
        toast.error ('Error al crear el usuario');
      }
    }
  }






