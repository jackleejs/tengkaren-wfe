import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const AuthenticationRoutes: Routes = [
	{
		path: '',
		component: LoginComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	},
];
