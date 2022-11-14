import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  name: string = "";
  
  newName: string = "";
  // names: string[] = [];
  names: string[] = ["elemento 1", "elemento 2", "elemento 3"]

  addName(){
    this.names.push(this.newName)
  }
  
  }


