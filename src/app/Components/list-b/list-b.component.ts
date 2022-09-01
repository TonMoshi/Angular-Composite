import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-b',
  templateUrl: './list-b.component.html',
  styleUrls: ['./list-b.component.scss']
})
export class ListBComponent implements OnInit {

  elements: string[];

  constructor() { }

  ngOnInit() {
  }

}
