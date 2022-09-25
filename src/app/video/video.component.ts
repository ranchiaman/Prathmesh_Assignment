import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor() { }

  @Input() display: any;
  ngOnInit(): void {
  }

  @Input() videoLink :any;

  displayNone(){
    this.display = false;
  }
}
