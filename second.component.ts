import { Component } from "@angular/core";

@Component({
    selector : 'app-second-comp',
    template : `
    <h1>{{ title }}</h1>
    <h1 [innerHTML]="title" ></h1>
    <h1 bind-innerHTML="title" ></h1>
    <hr>
    <h1 [class]="stylename" [textContent]="title" ></h1>
    <hr>
    <img [src]="poster" width="100">
    <img bind-src="poster" width="100">
    <img src="{{ poster }}" width="100">
    <button (click)="clickHandler($event)">
        <h1>Click me</h1>
        <hr>
        <img src="assets/images/batman.jpg" width="100" alt="batman">
    </button>
    <button on-click="clickHandler($event)" >
        <h1>Click me</h1>
        <hr>
        <img src="assets/images/ironman.jpg" width="100" alt="ironman">
    </button>   
    <button (click)="clickHandler($event)">
        <h1>Click me</h1>
        <hr>
        <img src="assets/images/captainamerica.jpg" width="100" alt="captain america">
    </button>
    <button on-click="clickHandler($event)" >
        <h1>Click me</h1>
        <hr>
        <img src="assets/images/deadpool.jpg" width="100" alt="deadpool">
    </button>   
    <button [disabled]="agree" >Login</button>
    <input type="text" (keydown.space)="keyHandler($event)">
    <div>{{ title.toUpperCase() }}</div>
    <div>{{ title.length * 2 }}</div>
    <input type="range" value="{{ title.length * 2 }}">
    
    <div [style.border]="mystyle"
         [style.background-color]='mycol' 
         [style.width.px]='mywidth'  
        >{{ title.length * 2 }}</div>
        
    <div [style.border]="mystyle"
         [style.background-color]='mycol' 
         [style.width.%]='mywidth'  
        >{{ title.length * 2 }}</div>
    `,
    styles : [`
    .box{
        width : 250px;
        height : 150px;
        background-color : orange;
    }
    `]
})
export class SecondComp{
    title = " Welcome to Honeywell Bangalore ";
    stylename = 'box';
    poster = "assets/images/antman.jpg";
    agree = true;
    mystyle = "2px solid red";
    mycol = "blue";
    mywidth='50';
    
    clickHandler(evt){
        alert(evt.target.innerHTML);
        console.log(evt);
    }
    keyHandler(evt){
        console.log(evt);
    }
}
