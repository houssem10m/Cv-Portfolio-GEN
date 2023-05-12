import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ModelsComponent } from './models/models.component';
import { RegistreComponent } from './registre/registre.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './Guard/auth.guard';

const MyRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'registre', component: RegistreComponent },
  {
    path: 'formulaire',
    canActivate: [AuthGuard],
    component: FormulaireComponent,
  },
  {
    path: 'portfolio',
    canActivate: [AuthGuard],
    component: PortfolioComponent,
  },
  { path: 'cv', canActivate: [AuthGuard], component: ModelsComponent },
];
export const Routing = RouterModule.forRoot(MyRoutes);
