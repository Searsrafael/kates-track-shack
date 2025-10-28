import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TapesComponent } from './pages/tapes/tapes.component';
import { PlayersComponent } from './pages/players/players.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
import { RepairServicesComponent } from './pages/repair-services/repair-services.component';
import { GarageSaleComponent } from './pages/garage-sale/garage-sale.component';
import { TransferServicesComponent } from './pages/transfer-services/transfer-services.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tapes-for-sale', component: TapesComponent },
  { path: 'players-for-sale', component: PlayersComponent },
  { path: 'repair-supplies', component: RepairServicesComponent },
  { path: 'services', component: TransferServicesComponent },
  { path: 'accessories', component: AccessoriesComponent },
  { path: 'garage-sale', component: GarageSaleComponent },
  { path: '**', redirectTo: '' }
];
