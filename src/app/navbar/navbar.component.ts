import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isClicked:boolean =false
isClicked1:boolean =false
isClicked2:boolean =false

  constructor() { }

  ngOnInit(): void {
  }
  replace(): void {
  this.isClicked=true
  this.isClicked1=false
  this.isClicked2=false
  }
  replace1(): void {
    this.isClicked=false
    this.isClicked1=true
    this.isClicked2=false
    }
    replace2(): void {
      this.isClicked=false
      this.isClicked1=false
      this.isClicked2=true
      }
}

