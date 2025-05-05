import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  lists: String[]=[]
  

  deleteitem(index: number) {
    this.lists.splice(index, 1);
  }
}
