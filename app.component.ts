import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template : `
  // <h1> Title is : {{ title }}</h1>
  // <hr>
  // <app-second-comp></app-second-comp>
  // `,
  templateUrl: './app.template.html',
  styleUrls : ['./mystyle.css', ]
})
export class AppComponent {
  title = 'Welcome to your life ! there\'s no turning back ';
}
