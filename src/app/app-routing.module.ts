import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategorynewsComponent } from './pages/categorynews/categorynews.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category/:categoryslug', component: CategorynewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
