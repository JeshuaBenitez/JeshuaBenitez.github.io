import { Component, OnInit } from '@angular/core';
import { EducationService } from '../services/education-service/education.service';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  education: any[] = [];

  constructor(private educationService: EducationService) {}

  ngOnInit() {
    this.education = this.educationService.getEducation();
  }
}
