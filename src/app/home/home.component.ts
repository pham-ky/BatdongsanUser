import { AfterViewInit, Injector, Renderer2 } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(){}
  title = "Trang chủ - Bất động sản";
  ngOnInit(): void {
  }
  

}
