import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Pizza', 'dough, cheese, sauce','1. pre-heat the oven,  2. Bake 3. Enjoy')
  ];
}
