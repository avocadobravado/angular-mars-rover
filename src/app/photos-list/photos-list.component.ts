import { Component, OnInit } from '@angular/core';
import { RoverFormComponent } from './../rover-form/rover-form.component';
import { MarsRoverAPIPhotos} from './../mars-rover-api-photos.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css'],
  providers: [ MarsRoverAPIPhotos ]
})
export class PhotosListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
