import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgeService {

  public age$: Observable<number> | undefined;

  constructor() {
   }


  public getAge(age: string) {
    let actualDate = new Date(age);
    let todayDate = new Date();
    return this.calculateYear(todayDate, actualDate);
  }

  calculateYear(date1:Date, date2:Date) {
    let date = date1.getFullYear()-date2.getFullYear();
    return date;
  }
}

