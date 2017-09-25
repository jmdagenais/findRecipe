import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Http} from '@angular/http';

import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  @ViewChild('f') recipeForm: NgForm;
  private tags: string[] = [];
  public currentTag: string = '';

  constructor(private http: Http) { }

  ngOnInit() {
  }

  addTag(tag: string) {
    if (tag.length > 0) {
      this.tags.push(tag);
      this.currentTag = '';
    }
  }

  removeTag(tag: string) {
    const index = this.tags.indexOf(tag);
    this.tags.splice(index, 1);
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.addTag(this.currentTag);
    }
  }

  submit(form: NgForm) {
    if (form.valid) {
      const recipe: Recipe = new Recipe(form.value.recipeName, form.value.description, this.tags);

      // save recipe to the DB
      this.http.post('/api/recipes', recipe)
        .subscribe((val) => {
          form.reset();
          this.tags = [];
        });
    }
  }


}
