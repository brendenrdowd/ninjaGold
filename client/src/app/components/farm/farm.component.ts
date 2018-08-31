import { Component, OnInit } from '@angular/core';
import { InterlinkService } from '../../interlink.service'

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {

  constructor(private _intelrink: InterlinkService) { }

  processMoney(str){
    this._intelrink.processMoney(str);
  }

  ngOnInit() {
  }

}
