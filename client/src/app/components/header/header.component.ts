import { Component, OnInit } from '@angular/core';
import { InterlinkService } from '../../interlink.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  gold:number
  time:string
  user:object
  constructor(private _interlink: InterlinkService, private _router: Router) { 
    this.gold = this._interlink.gold;
  }

  save(){
    if(this.user){
      this._interlink.save(()=>{
        this.user = this._interlink.user;
      });
    }else{
      this._router.navigate(['login'])
    }
  }

  ngOnInit() {
    this._interlink.currentGold.subscribe((gold)=>{
      this.gold = gold;
    });

    this._interlink.currentUser.subscribe((user)=>{
      this.user = user;
    })
    
  }
}
