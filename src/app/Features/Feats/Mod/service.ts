import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ConfigBaseService } from '../../../Services/config-base.service';

@Injectable()
export class Service extends ConfigBaseService {

  mock: string[] = ["MOD1", "MOD2", "MOD3", "MOD4"];
  getElements(type): Observable<any> {
    return of(this.mock);
  }

  getElement(id): Observable<any> {
    return of("MOD1");
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
