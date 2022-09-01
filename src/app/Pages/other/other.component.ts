import { Component, ComponentFactory, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParamKeys } from 'src/app/Models/defaults';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {
  @ViewChild('UIEditionView', { read: ViewContainerRef, static: false }) UIViewContainer;
  factory: ComponentFactory<any>;
  componentRef: ComponentRef<any>;

  type: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get(ParamKeys.Type);
  }

  createComponent() {
    this.componentRef = this.UIViewContainer.createComponent(this.factory);
  }

}
