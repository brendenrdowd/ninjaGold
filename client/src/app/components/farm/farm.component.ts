import { Component, OnInit } from '@angular/core';
import { InterlinkService } from '../../interlink.service'

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {

  constructor(private _interlink: InterlinkService) { }

  processMoney(str){
    this._interlink.processMoney(str,()=>{});
  }

  ngOnInit() {
  }

}
