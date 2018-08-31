import { Component, OnInit } from '@angular/core';
import { InterlinkService } from '../../interlink.service'

@Component({
  selector: 'app-casino',
  templateUrl: './casino.component.html',
  styleUrls: ['./casino.component.css']
})
export class CasinoComponent implements OnInit {

  constructor(private _interlink: InterlinkService) { }

  processMoney(str){
    this._interlink.processMoney(str,()=>{});
  }

  ngOnInit() {
  }

}
