import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private education = [
    { degree: 'Ingenieria en Software', institution: 'Universidad Veracruzana', starDate: '2022', endDate: '2027' },
    { degree: 'Certificacion en Angular', institution: 'Unuversidad Veracruzana', starDate: '2025', endDate: '2026'}
  ];

  constructor() { }

  getEducation() {
    return this.education;
  }
}
