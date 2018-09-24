import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `
  <div class="boxer">
    <h1>Main Component</h1>
    <h2>{{ title }}</h2>
    <button (click)="clickHandler($event)">click me</button>
    <h2 [innerHTML]="title"></h2>
    <app-child-comp (childEvent)="childEventHandler($event)" [pubname]="herolist">
      <h1>Hello from Heading One</h1>
      <h2>Hi from Heading Two</h2>
      <h2>Ola from Heading Two again</h2>
      <li>List Item 1 </li>
      <li class="x">List Item 2</li>
      <li>List Item 3</li>
      <li class="x">List Item 4</li>
      <li class="y">List Item 5</li>
      </app-child-comp>
  </div>
  `,
    styles : [`
        .boxer{
            width : 600px;
            padding: 10px;
            display : table;
            background-color : grey;
            margin : auto;
        }
    `]
})
export class AppComponent {
  title = 'Welcome to your life, there is no turning back';
  herolist = ["Batman","Spiderman","Ironman","Hulk"];
  clickHandler(evt){
    alert("you clicked the button")
  }
  childEventHandler(msg){
    alert(msg)
  }
}
