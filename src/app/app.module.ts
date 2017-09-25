import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {Route, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect';

import { AppComponent } from './app.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import {RecipeService} from './shared/recipe.service';

const routes: Route[] = [
  {path: '', component: RecipeListComponent},
  {path: 'recipes', component: RecipeListComponent},
  {path: 'recipes/add', component: AddRecipeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AddRecipeComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MultiselectDropdownModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
