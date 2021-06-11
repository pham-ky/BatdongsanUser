import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { CustomerComponent } from './customer.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children:[
      {
        path: 'add-post',
        component: AddPostComponent,
      },
      // {
      //   path: '',
      //   component: ,
      // },
    ]
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class CusRoutingModule {}