import { Component, OnInit } from '@angular/core';
import { Timer } from './timer';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {
  public changedNum: number;
  public timer: Timer;

  constructor() {}

  ngOnInit() {
    this.calcTimer();
  }
  public btnClick(): void {
    this.calcTimer(true);
  }

  private calcTimer(clear?: boolean): void {
    // if (this?.timer) {
    //   return;
    // }
    const max = 10 ** 12;
    const minimum = 10000;
    const initNumber =
      Math.floor(Math.random() * (max - minimum + 1)) + minimum;
    let changednum = initNumber;
    this.changedNum = initNumber;
    console.log(initNumber);
    const timeInterval = setInterval(() => {
      if (changednum === 0 || clear) {
        clearInterval(timeInterval);
      }
      this.changedNum = changednum;
      console.log(changednum);
      const sec = Math.floor((changednum % (1000 * 60)) / 1000);
      const min = Math.floor((changednum % (1000 * 60 * 60)) / (1000 * 60));
      const hrs = Math.floor(
        (changednum % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const day = Math.floor(
        (changednum % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)
      );
      const yrs = Math.floor(changednum / (1000 * 60 * 60 * 24 * 365));
      this.timer = {
        yrs,
        day,
        hrs,
        min,
        sec,
      };
      changednum = changednum - 1000;
    }, 1000);
  }
}
