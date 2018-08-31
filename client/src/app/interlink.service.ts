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
  currentUser: BehaviorSubject<object> = new BehaviorSubject({})
  errorMessage:string = ""
  error:BehaviorSubject<string> = new BehaviorSubject("")
  constructor(private _http: Http) {
    this.gold = 0
    this.time = Date().toString();
    this.user = {
      username: "",
      _id: "",
      gold: this.gold
    }
  }

  processMoney(str, cb) {
    this.errorMessage = ""
    this.error.next(this.errorMessage)
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

  login(user, cb) {
    this._http.post('/login', user).subscribe((res) => {
      if(res.json() == "No Game Found, creating new profile"){
        this.errorMessage = res.json();
        this.error.next(this.errorMessage)
        cb()
      }else{
        this.user = res.json();
        // this.user = this.user['user']
        this.gold = this.user['gold']
        this.currentGold.next(this.gold)
        this.currentUser.next(this.user)
        cb()
      }
    })
  }

  save(cb) {
    this.user['gold'] = this.gold;
    this._http.post('/save', this.user).subscribe((res) => {
    })
  }

  authenticate(cb) {
    this._http.get('/authenticate').subscribe((res) => {
      this.user = res.json();
      if(res.json()){
        this.user = this.user['user']
      }
      this.currentUser.next(this.user)
      cb();
    })
  }

  random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
