import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipesPage } from './recipes.page';

import { RecipesPageRoutingModule } from './recipes-routing.module';
import { RecipeItemComponentModule } from 'src/app/components/recipe-item/recipe-item.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RecipesPageRoutingModule,
    RecipeItemComponentModule
  ],
  declarations: [RecipesPage]
})
export class RecipesPageModule {}
