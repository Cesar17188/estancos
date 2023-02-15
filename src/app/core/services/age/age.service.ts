import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgeService {

  private age: number = 0;
  public actualAge = new BehaviorSubject<number>(1);

  actualAge$ = this.actualAge.asObservable();

  constructor() {
   }

   addAge(age: number) {
    this.age = age;
    this.actualAge.next(this.age);
   }


  public calculateAge(age: string) {
    let actualDate = new Date(age);
    let todayDate = new Date();
    this.addAge(this.calculateYear(todayDate, actualDate));
  }

  calculateYear(date1:Date, date2:Date) {
    let date = date1.getFullYear()-date2.getFullYear();
    return date;
  }

  getAge() {
    return this.actualAge.getValue();
  }
}

