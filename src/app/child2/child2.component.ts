import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})

export class Child2Component implements OnInit {
  dataToRender: any;
  @Input('d') d;

  constructor() {


  }
  ngOnInit() {
    console.log(this.d, 'pasaps');
    this.dataToRender = this.d;
  }



}
