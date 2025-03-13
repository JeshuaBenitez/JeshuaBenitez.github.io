import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private headerData = {
   name: 'Jeshua Benitez',
   goalLife: 'Desarrollador Full Stack con experiencia en Angular',
   photoUrl: 'https://via.placeholder.com/150',
   email: 'jesuaeder.moshi2004@gmail.com',
   phoneNumber: '+52 2721656576',
   location: 'Orizaba, México',
   socialNetwork: 'https://linkedin.com/in/JeshuaB'
  };

  constructor() { }

  getHeaderData() {
   return this.headerData;
  }
}
