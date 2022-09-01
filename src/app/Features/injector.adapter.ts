
import { Injectable, Injector } from '@angular/core';

@Injectable()
export class InjectorAdapter {
  constructor(private injector: Injector) {}

  get<T>(token: any): any {
    return this.injector.get<T>(token);
  }
}
