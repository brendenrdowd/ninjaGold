import { Component, OnInit } from '@angular/core';
import { InterlinkService } from '../../interlink.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginreg',
  templateUrl: './loginreg.component.html',
  styleUrls: ['./loginreg.component.css']
})
export class LoginregComponent implements OnInit {
  user:object;
  constructor(private _interlink:InterlinkService,private _router: Router) {
    this.user = {
      username:"",
      password:"",
      gold:0
    }
  }

  login(){
    this.user['gold'] = this._interlink.gold;
    this._interlink.login(this.user,()=>{
      this._router.navigate([''])
    })
  }

  ngOnInit() {
  }

}
