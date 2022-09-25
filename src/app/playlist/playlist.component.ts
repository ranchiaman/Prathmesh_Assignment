import { Component, OnInit } from '@angular/core';
import { VideoapiService } from '../videoapi.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  apiData:any = [] ;
  display: any = false;
  videoLink: any;
  aman: any = "https://youtu.be/a_xeWL2Shpc";
  
  constructor(private api: VideoapiService) { }

  ngOnInit(): void {
    this.api.callVideoAPI().subscribe((res:any)=>{
      this.apiData = res.data;
    })
  }

  displayBlock(video:any){
    this.videoLink = video;
    this.display = true;
    console.log("YT",this.videoLink)
   
  }
  displayNone(){
    this.display = false;
  }
}
