import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterestsService {
  private interests = ['Desarrollo Web', 'Machine Learning', 'Videojuegos'];  

  constructor() { }

  getInterests() {
    return this.interests;
  }
}
