import { Component, OnInit } from '@angular/core';
import { InterlinkService } from '../../interlink.service'

@Component({
  selector: 'app-cave',
  templateUrl: './cave.component.html',
  styleUrls: ['./cave.component.css']
})
export class CaveComponent implements OnInit {

  constructor(private _intelrink: InterlinkService) { }

  processMoney(str){
    this._intelrink.processMoney(str);
  }

  ngOnInit() {
  }

}
