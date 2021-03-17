import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './public/contact/contact.component';
import { HomeComponent } from './public/home/home.component';
import { InspirationComponent } from './public/inspiration/inspiration.component';
import { ServicesComponent } from './public/services/services.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'contact', component:ContactComponent },
  { path: 'services', component:ServicesComponent },
  { path: 'inspiration', component:InspirationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
