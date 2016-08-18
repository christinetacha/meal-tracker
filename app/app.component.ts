import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div>
      <meal-list [meal-list]="meals"></meal-list>
    </div>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("Burrito", 370, "Lean meat", 0),
      new Meal("Hamburger", 340, "No cheese", 1),
      new Meal("Wrap", 250, "Mostly salad", 2)
    ];
  }
}

export class Meal {
  public done: boolean = false;
  constructor(public name: string, public calories: number, public description: string) {

  }
}
