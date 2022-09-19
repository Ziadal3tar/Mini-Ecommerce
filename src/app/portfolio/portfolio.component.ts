import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PORTFOLIOComponent implements OnInit {
  @ViewChild('mask') mask: any;

  isClicked:boolean =false
  scrollToBack:any

  height:any
  src :any
  constructor() { }

  ngOnInit(): void {
  }
ff(){
  console.log(this.src);

  setTimeout(() => {
    this.isClicked=true
  }, 4);
}
  open(data:any){
    this.src =data
// console.log(data.path[2]);






// data.path[2]?.childNodes[1]?.attributes?.src?.nodeValue;




    this.scrollToBack = scrollY
    window.scrollTo(0,0);

(<HTMLInputElement>document.getElementById("mask")).style.height = window.innerHeight+"px";


   this.ff()



      }
  close(): void{

    this.isClicked=false

    window.scrollTo(0,this.scrollToBack);

  }
}
