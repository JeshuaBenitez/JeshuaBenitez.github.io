import { Component, OnInit } from '@angular/core';
import { CertificatesService } from '../services/certificates-service/certificates.service';

@Component({
  selector: 'app-certificates',
  imports: [],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent implements OnInit {
  certificates: any [] = [];

  constructor(private certificatesServices: CertificatesServices) {}

  ngOnInit() {
    this.certificates = this.certificatesService.getCertificates();
  }
}
