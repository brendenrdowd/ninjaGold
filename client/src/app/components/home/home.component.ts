import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  gold: number
  activityArr:string[]=[]
  time:string
  constructor() {
    this.gold = 0
    this.time = Date().toString();
  }

  processMoney(str) {
    var time = Date.now()
    if (str == "House") {
      var gold = this.random(2,5)
      this.gold += gold;
      this.activityArr.push(`You found ${gold} at the ${str}`)
    }
    else if (str == "Cave") {
      var gold = this.random(5,10)
      this.gold += gold;
      this.activityArr.push(`You found ${gold} at the ${str}`)
    }
    else if (str == "Farm") {
      var gold = this.random(10,20)
      this.gold += gold;
      this.activityArr.push(`You found ${gold} at the ${str}`)
    }
    else if (str == "Casino") {
      var gold = this.random(-50,50)
      if(Math.sign(gold) == -1){
        this.gold += gold;
        this.activityArr.push(`You lost ${gold} at the ${str}`)
        return
      }
      this.gold += gold;
      this.activityArr.push(`You found ${gold} at the ${str}`)
    } else {
      console.log("error")
      return
    }
  }

  random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngOnInit() {
    console.log(this.time)
  }

}