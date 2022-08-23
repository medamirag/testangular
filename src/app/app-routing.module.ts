import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cours',
    loadChildren: () => import('./cours/cours.module').then(m => m.CoursModule)
  },
  {
    path: 'ressources',
    loadChildren: () => import('./ressources/ressources.module').then(m => m.RessourcesModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'acceuil',
    loadChildren: () => import('./acceuil/acceuil.module').then(m => m.AcceuilModule)
  },
  {
    path: '**',
    loadChildren: () => import('./notfound/notfound.module').then(m => m.NotfoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
