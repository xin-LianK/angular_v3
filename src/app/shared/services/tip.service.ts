import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipService {
  private configSubject = new Subject<TipConfig>();
  config = this.configSubject.asObservable();
  constructor() { }
  set(param: TipConfig) {
    this.configSubject.next(param);
  }
}
export interface TipConfig {
  content: string;
  timeout?: number;
}
