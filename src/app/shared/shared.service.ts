import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private fitnessDataSubject = new BehaviorSubject<any>(null);
  fitnessData$ = this.fitnessDataSubject.asObservable();

  constructor() { }

  updateFitnessData(data: any) {
    console.log('Updating fitness data in service:', data); // Add this line
    this.fitnessDataSubject.next(data);
  }
}
