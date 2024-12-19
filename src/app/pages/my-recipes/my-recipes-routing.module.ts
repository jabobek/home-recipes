import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyRecipesPage as MyRecipesPage } from './my-recipes.page';

const routes: Routes = [
  {
    path: '',
    component: MyRecipesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyRecipesPageRoutingModule {}
