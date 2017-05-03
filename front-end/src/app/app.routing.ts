import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TransportDocComponent } from './components/transportDoc/transportDoc.component';

/** Routes for all our pages in the app **/
/** in momentul cand termni o pagina trebuie sa ii faci ruta..deci redirectionezi cumva catre componenta creata **/
export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'transportDoc', component: TransportDocComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
