
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable()
export class ConfigBaseService {
  elementList$: any;

  constructor() {}

  getElements(type: string): Observable<any> {
    return of([]);
  }

  getFilteredElements(type, fields): Observable<any> {
    return of([]);
  }

  getElement(id): Observable<any> {
    return of();
  }

  createElement(element): Observable<any> {
    return of([]);
  }

  updateElement(id, element): Observable<any> {
    return of([]);
  }

  deleteElement(id): Observable<any> {
    return of([]);
  }
}
