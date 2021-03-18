import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent implements OnInit {
  count =2;
  constructor() { }

  ngOnInit(): void {
  }
  countNumber(){
    this.count=this.count*2;
  }

}
