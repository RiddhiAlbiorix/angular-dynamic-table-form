import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'dynamic-table',
  //   pathMatch: 'full'
  // },
  // { path: 'dynamic-table', component: DynamicTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
