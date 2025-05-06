import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  list:String="";
  lists:String[]=[];
  addlist()
  {
    this.lists.push(this.list);
    this.list="";
  }

  showPopup=false;
  popup()
  {
    this.lists=[];
    this.showPopup=true
  }

 
}
