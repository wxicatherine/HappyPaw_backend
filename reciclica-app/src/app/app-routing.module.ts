import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
<<<<<<< HEAD
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
=======
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'forgot-password-1',
    loadChildren: () => import('./pages/forgot-password-1/forgot-password-1.module').then( m => m.ForgotPassword1PageModule)
  },
  {
    path: 'create-account-1',
    loadChildren: () => import('./pages/create-account-1/create-account-1.module').then( m => m.CreateAccount1PageModule)
  },
  {
    path: 'forgot-password-2',
    loadChildren: () => import('./pages/forgot-password-2/forgot-password-2.module').then( m => m.ForgotPassword2PageModule)
  },
  {
    path: 'forgot-password-3',
    loadChildren: () => import('./pages/forgot-password-3/forgot-password-3.module').then( m => m.ForgotPassword3PageModule)
  },
  {
    path: 'forgot-password-4',
    loadChildren: () => import('./pages/forgot-password-4/forgot-password-4.module').then( m => m.ForgotPassword4PageModule)
  }
>>>>>>> 5264763 (Create page Create-account-1, page Forgot-password-1,2,3,4. Design this)
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
