import { Component, OnInit } from '@angular/core';
import { InterlinkService } from '../../interlink.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  gold:number
  time:string
  user:object
  constructor(private _interlink: InterlinkService) { 
    this.gold = this._interlink.gold;
    console.log("header-component:",this.gold,"& service:",this._interlink.gold)
  }

  ngOnInit() {
    this._interlink.currentGold.subscribe((gold)=>{
      this.gold = gold;
    });

    this._interlink.authenticate(()=>{
      this.user = this._interlink.user;
    })
  }
}
