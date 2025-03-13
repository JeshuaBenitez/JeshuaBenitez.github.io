import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skills = ['Angular', 'TypeScript', 'Firebase', 'Node.js'];

  constructor() { }

  getSkills() {
    return this.skills;
  }
}
