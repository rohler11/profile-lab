import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { EditComponentComponent } from './edit-component/edit-component.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponentComponent },
  { path: 'edit-profile', component: EditComponentComponent },
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
