
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ui-view-datasource',
  templateUrl: './ui-view.component.html',
  styleUrls: ['./ui-view.component.scss'],
})
export class UIViewComponent implements OnInit {
  @Input() elements: Observable<string[]>;
  @Output() change = new EventEmitter();

  data: string[];
  show = false;

  constructor() {}

  ngOnInit() {
    this.elements.subscribe(elements => {
      this.data = elements;
      this.show = true;
    });
  }

}
