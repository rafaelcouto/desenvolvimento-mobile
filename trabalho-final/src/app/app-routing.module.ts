import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'contact/list', loadChildren: './contact-list/contact-list.module#ContactListPageModule' },
  { path: 'contact-edit', loadChildren: './contact-edit/contact-edit.module#ContactEditPageModule' },
  { path: 'user-register', loadChildren: './user-register/user-register.module#UserRegisterPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
