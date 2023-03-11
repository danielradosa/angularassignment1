import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IData } from './interface';


const delta = 10000;

function getValue(): number {
  return Math.random() * 1000;
}

function getTime(index: number) {
  return Date.now() - (index * delta);
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: IData[] = [];
  private lastValueData: Subject<IData>;

  constructor() {
    this.lastValueData = new Subject();
    
    for (let i = 179; i >= 0; i--) {
      this.data.push({
        time: getTime(i),
        value: getValue()
      });
    }
  
    setInterval(() => {
      const value = {
        time: Date.now(),
        value: getValue()
      };
  
      this.data.shift();
      this.data.push(value);
      this.lastValueData.next(value);
    }, delta);
  }

  public stream(): Observable<IData> {
    return this.lastValueData.asObservable();
  }

  public getData(): Observable<IData[]> {
    return new Observable((subscriber) => {
      subscriber.next(this.data);
      subscriber.complete();
    });
  }
}
