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
  private timeInterval: ReturnType<typeof setInterval>;
  constructor() {}

  public ngOnInit(): void {
    if (this?.timer) {
      return;
    } else {
      this.calcTimer();
    }
  }
  public btnClick(): void {
    clearInterval(this.timeInterval);
    this.calcTimer();
  }

  private calcTimer(): void {
    const max = 10 ** 11;
    const minimum = 10000;
    const initNumber =
      Math.floor(Math.random() * (max - minimum + 1)) + minimum;
    let changednum = initNumber;
    this.changedNum = initNumber;
    console.log(`${initNumber} in milliseconds`);
    this.timeInterval = setInterval(() => {
      if (changednum === 0) {
        clearInterval(this.timeInterval);
      }
      this.changedNum = changednum;
      // console.log(changednum);
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
