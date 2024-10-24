import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { hasEmailError, isRequired } from '../../utils/validators';
import { AuthService } from '../../data-access/auth.service';
import { toast } from 'ngx-sonner';
import { Router, RouterLink } from '@angular/router';
import { GoogleButtonComponent } from '../../ui/google-button/google-button.component';

interface FormRegistro{
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, GoogleButtonComponent],
  templateUrl: './registro.component.html',

})
export default class RegistroComponent {

  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);
  private _router = inject(Router);

 isRequired(field: 'email' | 'password') {
    return isRequired(field, this.form);
  }

  hasEmailError(){
    return hasEmailError(this.form);
  }

  form = this._formBuilder.group<FormRegistro>({

    email: this._formBuilder.control('', [Validators.required, Validators.email]),
    password: this._formBuilder.control('', Validators.required),
  });

 async submit (){
    if(this.form.invalid) return;

    try {
      const {email, password } = this.form.value;

    if (!email || !password) return;


     await this._authService.signUp({ email , password });

     toast.success('Usuario Creado Exitosamente');

     this._router.navigateByUrl('/tareas');

    } catch (error) {
        toast.error ('Error al crear el usuario');
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



