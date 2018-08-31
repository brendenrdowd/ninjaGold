import { Component, OnInit } from '@angular/core';
import { InterlinkService } from '../../interlink.service'

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  constructor(private _interlink: InterlinkService) { }

  processMoney(str){
    this._interlink.processMoney(str,()=>{});
  }

  ngOnInit() {
  }

}
