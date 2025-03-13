import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header-service/header.service;

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
    headerData: any;
   
    constructor(private headerService: HeaderService) {}
  
    ngOnInit() {
	this.headerData = this.headerService.getHeaderData();
    }
}
