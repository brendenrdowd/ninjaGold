import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class InterlinkService {
  gold: number
  currentGold: BehaviorSubject<number> = new BehaviorSubject(0)
  activityArr: string[] = []
  time: string
  user: object
  constructor(private _http: Http) {
    this.gold = 0
    this.time = Date().toString();
    this.user = {
      username: "",
      _id: ""
    }
  }

  processMoney(str, cb) {
    let gold = null;
    if (str == "House") {
      gold = this.random(2, 5)
      this.gold += gold;
      this.currentGold.next(this.gold)
      this.activityArr.push(`You found ${gold} gold at the ${str}`)
      cb()
    }
    else if (str == "Cave") {
      gold = this.random(5, 10)
      this.gold += gold;
      this.currentGold.next(this.gold)
      this.activityArr.push(`You found ${gold} gold at the ${str}`)
      cb()
    }
    else if (str == "Farm") {
      gold = this.random(10, 20)
      this.gold += gold;
      this.currentGold.next(this.gold)
      this.activityArr.push(`You found ${gold} gold at the ${str}`)
      cb()
    }
    else if (str == "Casino") {
      gold = this.random(-50, 50)
      if (Math.sign(gold) == -1) {
        this.gold += gold;
        this.currentGold.next(this.gold)
        this.activityArr.push(`You lost ${gold} gold at the ${str}`)
        cb()
      } else {
        this.gold += gold;
        this.currentGold.next(this.gold)
        this.activityArr.push(`You found ${gold} gold at the ${str}`)
        cb()
      }
    } else {
      console.log("error")
      cb()
    }
  }

  save() {
    this._http.get('/save').subscribe((res) => {

    })
  }

  login() {
    this._http.get('/load').subscribe((res) => {

    })
  }

  authenticate(cb) {
    this._http.get('/authenticate').subscribe((res) => {
      this.user = res;
      cb();
    })
  }

  random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
