import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { VistaApiComponent } from './vista-api/vista-api.component';

import { HomePage } from './home/home.page';
import { DatosPropComponent} from './datos-prop/datos-prop.component';
import { FormularioComponent } from "./formulario/formulario.component";
import {  RecibirObjetoComponent } from "./recibir-objeto/recibir-objeto.component";

const routes: Routes = [
  {
    path: 'home',
   /* loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)*/
   component:HomePage
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'vista',
    component: VistaApiComponent,
  },
  {
    path: 'datosprops',
    component: DatosPropComponent,
  },
  {
    path: 'formulario',
    component: FormularioComponent,
  },
  {
    path: 'recibirobjeto',
    component: RecibirObjetoComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
