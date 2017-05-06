import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TransportDocComponent } from './components/transportDoc/transportDoc.component';
import { RetragereDocComponent } from './components/retragereDoc/retragereDoc.component';
import { IntrerupereDocComponent } from './components/intrerupereDoc/intrerupereDoc.component';
import { SituatieDocComponent } from './components/situatieDoc/situatieDoc.component';
import { DiplomaDocComponent } from './components/diplomaDoc/diplomaDoc.component';
import { LicentaDocComponent } from './components/licentaDoc/licentaDoc.component';

/** Routes for all our pages in the app **/
/** in momentul cand termni o pagina trebuie sa ii faci ruta..deci redirectionezi cumva catre componenta creata **/
export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'transportDoc', component: TransportDocComponent},
  {path: 'retragereDoc', component: RetragereDocComponent},
  {path: 'intrerupereDoc', component: IntrerupereDocComponent},
  {path: 'situatieDoc', component: SituatieDocComponent},
  {path: 'diplomaDoc', component: DiplomaDocComponent},
  {path: 'licentaDoc', component: LicentaDocComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
