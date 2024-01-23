import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { SpotFinderComponent } from './spot-finder/spot-finder.component';

export const routes: Routes = [
  { path: '', component: SpotFinderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
