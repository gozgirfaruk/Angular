import { Component, ViewEncapsulation } from "@angular/core";
import { Contact } from "../contact/contact";

@Component({
    selector:"app-about",
    standalone:true,
    templateUrl:"./about.component.html",
    styleUrl:"./about.component.css",
    imports: [Contact],
    providers:[],
    encapsulation:ViewEncapsulation.None

})
export class AboutComponent{

}