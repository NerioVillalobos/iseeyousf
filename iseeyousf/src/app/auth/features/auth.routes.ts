import { Routes } from "@angular/router";

export  default[

  {
    path: 'inicio-sesion',
    loadComponent: () => import('./inicios/inicios.component')
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.component')
  }
] as Routes
