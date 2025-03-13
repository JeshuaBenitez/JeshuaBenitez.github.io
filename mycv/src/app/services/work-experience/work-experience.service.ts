import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {
  private workExperience = [
   { position: 'Desarrollador Frontend', company: 'Empresa XYZ', startDate: '2022', endDate: 'Presente'},
   { position: 'Ingeniero de Software', company: 'Startup ABC', startDate: '2019', endDate: '2022'}
  ];
  constructor() { }

  getWorkExperience() {
   return this.workExperience;
  }
}
