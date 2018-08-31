import { Component, OnInit } from '@angular/core';
import { InterlinkService } from '../../interlink.service'

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  activityArr: string[]
  time:string
  constructor(private _interlink: InterlinkService) {
    this.activityArr = this._interlink.activityArr;
    this.time = this._interlink.time;
    console.log("activity log")
  }
  
  ngOnInit() {
    this.activityArr = this._interlink.activityArr;
    this.time = this._interlink.time;
    console.log("activity log")
  }

}
