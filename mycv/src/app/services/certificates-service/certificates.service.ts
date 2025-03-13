import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  private certificates = [
    { title: 'Certificacion en Angular', organization: 'Google', year: '2022'},
    { title: 'Scrum Master', organization: 'Scrum Alliance', year: '2021'}
  ];

  constructor() { }

  getCertificates() {
    return this.certificates;
  }
}
