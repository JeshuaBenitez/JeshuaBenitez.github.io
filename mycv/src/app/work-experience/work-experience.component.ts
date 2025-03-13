import { Component } from '@angular/core';
import { WorkExperienceService } from '../services/work-experience-service/work-experience.service';

@Component({
  selector: 'app-work-experience',
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent implements OnInit {
  workExperience: any[] = [];

  constructor(private workExperienceService: WorkExperienceService) {}

  ngOnInit() {
    this.workExperience = this.workExperienceService.getWorkExperience();
  }
}
