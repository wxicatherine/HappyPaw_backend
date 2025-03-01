import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash-screen',
    pathMatch: 'full',
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./pages/splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'forgot-password-1',
    loadChildren: () => import('./pages/forgot-password-1/forgot-password-1.module').then(m => m.ForgotPassword1PageModule)
  },
  {
    path: 'create-account-1',
    loadChildren: () => import('./pages/create-account-1/create-account-1.module').then(m => m.CreateAccount1PageModule)
  },
  {
    path: 'forgot-password-2',
    loadChildren: () => import('./pages/forgot-password-2/forgot-password-2.module').then(m => m.ForgotPassword2PageModule)
  },
  {
    path: 'forgot-password-3',
    loadChildren: () => import('./pages/forgot-password-3/forgot-password-3.module').then(m => m.ForgotPassword3PageModule)
  },
  {
    path: 'forgot-password-4',
    loadChildren: () => import('./pages/forgot-password-4/forgot-password-4.module').then( m => m.ForgotPassword4PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
