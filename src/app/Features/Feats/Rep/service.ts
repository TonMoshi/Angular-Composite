import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ConfigBaseService } from '../../../Services/config-base.service';

@Injectable()
export class Service extends ConfigBaseService {

  mock: string[] = ["REP1", "REP1", "REP1", "REP1"];
  getElements(type): Observable<any> {
    return of(this.mock);
  }

  getElement(id): Observable<any> {
    return of("REP1");
  }

  createElement(element): Observable<any> {
    return of(this.mock);
  }

  updateElement(id, element): Observable<any> {
    return of(this.mock);
  }

  deleteElement(id): Observable<any> {
    return of(this.mock);
  }
}
