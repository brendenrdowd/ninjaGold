import { Component, OnInit } from '@angular/core';
import { InterlinkService } from '../../interlink.service'

@Component({
  selector: 'app-casino',
  templateUrl: './casino.component.html',
  styleUrls: ['./casino.component.css']
})
export class CasinoComponent implements OnInit {

  constructor(private _intelrink: InterlinkService) { }

  processMoney(str){
    this._intelrink.processMoney(str);
  }

  ngOnInit() {
  }

}
