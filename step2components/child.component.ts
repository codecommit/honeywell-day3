import { Component, Input, Output, EventEmitter } from "@angular/core";
/*
select works only on direct children
h1, h2, div
[class]
:not(.x)

tag selectors
class selectors
negation selectors

*/
@Component({
    selector : 'app-child-comp',
    template : `
    <div class="box">
        <h1> Hello from child component </h1>
        <h2 [innerHTML]="compname"></h2>
        <hr>
        <div class="honeywell">
            <ng-content select="h1"></ng-content>    
        </div>
        <hr>
        <div class="honeywell">
            <ng-content select=":not(.y)"></ng-content>    
        </div>
        <div class="blr">
            {{ compdata }}
            <hr>
            <ul>
                <li *ngFor="let hero of compdata"> {{ hero }} </li>
            </ul>
        </div>
    </div>

    <hr>
    <input #ip1 type="text">
    <button (click)="clickHandler(ip1.value)">Emit Child Event</button>
    `,
    styles : [`
        .box{
            width : 600px;
            background-color : silver;
            margin : auto;
        }
        .honeywell{
            background-color : yellow;
            front-family : arial;
            text-align : center;
        }
        .blr{
            background-color : red;
            front-family : arial;
            text-align : center;
            color : yellow;
        }
    `]
})
export class ChildComp{
    compname = "Honeywell Bangalore";
    @Input('pubname') compdata:string[];
    @Output() childEvent:EventEmitter<any> = new EventEmitter();
    clickHandler(message){
        this.childEvent.emit(message);
    }
}