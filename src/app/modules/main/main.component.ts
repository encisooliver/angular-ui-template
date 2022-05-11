import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  activeIndex: number = 1;
  constructor() { }

  items: MenuItem[] = [];
  
  subItems: MenuItem[] = [];

  ngOnInit(): void {
   
  }
}