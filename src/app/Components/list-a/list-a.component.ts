import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-a',
  templateUrl: './list-a.component.html',
  styleUrls: ['./list-a.component.scss']
})
export class ListAComponent implements OnInit {

  elements: string[];

  constructor() { }

  ngOnInit() {
  }

}
