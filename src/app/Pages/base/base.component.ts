import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParamKeys } from 'src/app/Models/defaults';
import { IFeatureManager } from 'src/app/Models/models';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  @ViewChild('UIEditionView', { read: ViewContainerRef, static: false }) UIViewContainer;
  factory: ComponentFactory<any>;
  componentRef: ComponentRef<any>;
  manager: IFeatureManager;
  type: string;
  loaded = false;
  data: string[] = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private route: ActivatedRoute) { }

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get(ParamKeys.Type);
    this.manager = this.route.snapshot.data.featureManager;

    this.factory = this.componentFactoryResolver.resolveComponentFactory(
      this.manager.UIView
    );

    if (this.componentRef) {
      this.componentRef.changeDetectorRef.detach();
      //this.validationMessageComponent.destroy();
    }

    this.manager.getFeatureElements().subscribe(elements => this.data = elements);

    this.loaded = true;
  }

  ngAfterViewInit() {
    this.componentRef = this.UIViewContainer.createComponent(this.factory);
    this.componentRef.instance.elements = this.manager.getFeatureElements();
    this.componentRef.changeDetectorRef.detectChanges();
  }

}
