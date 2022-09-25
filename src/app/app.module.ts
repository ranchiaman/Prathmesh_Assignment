import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { SafePipe } from './safe.pipe';
import { UppercasePipe } from './uppercase.pipe';
import { SetHeaderInterceptor } from './set-header.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    PlaylistComponent,
    SafePipe,
    UppercasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: SetHeaderInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
