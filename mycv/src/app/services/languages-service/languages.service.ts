import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  private languages = [
    { language: 'Español', level: 'Nativo'},
    { language: 'Inglés', level: 'Avanzado'}
  ]; 
 
  constructor() { }

  getLanguages() {
    return this.languages;
  }
}
