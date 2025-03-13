import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../services/languages-service/languages.service';

@Component({
  selector: 'app-languages',
  imports: [],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent implements OnInit{
  languages: any[] = [];
  
  constructor(private languagesService: LanguageService) {}
 
  ngOnInit() {
    this.languages = this.languagesService.getLanguages();
  }
}
