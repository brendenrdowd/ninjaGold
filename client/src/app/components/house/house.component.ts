import { Component, OnInit } from '@angular/core';
import { InterlinkService } from '../../interlink.service'

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  constructor(private _intelrink: InterlinkService) { }

  processMoney(str){
    this._intelrink.processMoney(str);
  }

  ngOnInit() {
  }

}
