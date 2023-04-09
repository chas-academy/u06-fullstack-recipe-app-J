import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']

})
export class SecureComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  }
