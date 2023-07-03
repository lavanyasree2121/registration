import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { freeApiService } from './services/freeapi.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  city:string="pgr";
  x:number=1;
  test(){
    // console.log(this.x);
    return this.x;
    
  }
  ishidden:boolean=false;
  isactive:boolean=false;
  isDisabled=true ;
  path="../assets/Screenshot (3).png";
  cvar:string="powderblue";
  mystyle:object={
    color:"powderblue",
    border:"1px solid black",

  }
  serverstatus="server not yet created";
  onCreate(){
    this.serverstatus="server yet created";

  }
  wish="gm";
  person={"name":"lav","gender":"f"};
  data="testing";
}

