import { Component, OnInit } from '@angular/core';
import { InterestsService } from '../services/interests-service/interests.service';

@Component({
  selector: 'app-interests',
  imports: [],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent implements OnInit {
  interests: string[] = [];

  constructor(private interestsService: InterestsService) {}

  ngOnInit() {
    this.interests = this.interestsService.getInterests();
  }
}
