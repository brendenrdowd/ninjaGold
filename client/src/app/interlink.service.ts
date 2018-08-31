import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterlinkService {
  gold: number
  activityArr: string[] = []
  time: string
  constructor() {
    this.gold = 0
    this.time = Date().toString();
  }

  processMoney(str) {
    let gold = null;
    if (str == "House") {
      gold = this.random(2, 5)
      this.gold += gold;
      this.activityArr.push(`You found ${gold} at the ${str}`)
      console.log("current gold:",this.gold)
    }
    else if (str == "Cave") {
      gold = this.random(5, 10)
      this.gold += gold;
      this.activityArr.push(`You found ${gold} at the ${str}`)
      console.log("current gold:",this.gold)
    }
    else if (str == "Farm") {
      gold = this.random(10, 20)
      this.gold += gold;
      this.activityArr.push(`You found ${gold} at the ${str}`)
      console.log("current gold:",this.gold)
    }
    else if (str == "Casino") {
      gold = this.random(-50, 50)
      if (Math.sign(gold) == -1) {
        this.gold += gold;
        this.activityArr.push(`You lost ${gold} at the ${str}`)
        console.log("current gold:",this.gold)
        return
      }
      this.gold += gold;
      this.activityArr.push(`You found ${gold} at the ${str}`)
      console.log("current gold:",this.gold)
    } else {
      console.log("error")
      return
    }
  }

  //save

  //login/register


  random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
