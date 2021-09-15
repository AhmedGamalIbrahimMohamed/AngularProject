import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  constructor() { }

  workImage = [
   
      {imgUrl : "../../assets/images/portfolio/thumbnails/1.jpg", alt:""},
      {imgUrl : "../../assets/images/portfolio/thumbnails/2.jpg", alt:""},
      {imgUrl : "../../assets/images/portfolio/thumbnails/3.jpg", alt:""},
      {imgUrl : "../../assets/images/portfolio/thumbnails/4.jpg", alt:""},
      {imgUrl : "../../assets/images/portfolio/thumbnails/5.jpg", alt:""},
      {imgUrl : "../../assets/images/portfolio/thumbnails/6.jpg", alt:""},
  
  ]
  ngOnInit(): void {
  }

}
