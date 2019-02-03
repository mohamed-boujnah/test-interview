import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WofurComponent }      from './components/wofur/wofur.component';

const routes: Routes = [  
  { path: '', component: WofurComponent },
  { path: 'wofur', component: WofurComponent },
  { path: '**', redirectTo: 'wofur' }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
