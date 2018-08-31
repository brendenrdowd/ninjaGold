import { Component, OnInit } from '@angular/core';
import { InterlinkService } from '../../interlink.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:object
  errorMessage:string = ""
  constructor(private _interlink: InterlinkService) {}

  ngOnInit() {
    this._interlink.authenticate(()=>{
      this.user = this._interlink.user;
    })

    this._interlink.error.subscribe((error)=>{
      this.errorMessage = error;
    })
  }
}