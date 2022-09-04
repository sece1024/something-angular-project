import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent implements OnInit {
  board: number[] = [];
  clickedCount: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.board = [1, 2, 3, 4, 5, 6, 7, 8, 0];
  }

  move(i: number): void {
    console.log("you click ", i);
    if (this.board[i] != 0) {
      this.doMove(i);
      if (this.board == [1, 2, 3, 4, 5, 6, 7, 8, 0]) {
        alert("You Win!");
      }
    }
  }

  private addCount() {
    this.clickedCount++;
  }

  reset(): void {
    this.clearCount();

  }

  private clearCount() {
    this.clickedCount = 0;
    this.board = [1, 2, 3, 4, 5, 6, 7, 8, 0];
  }

  doMove(n: number): void {
    let moves = this.getMoves();
    let zeroIndex = this.getZero();
    let index = n;
    let ii = 0;
    for (; ii < moves.length; ii++) {
      if (moves[ii] == index) {
        // console.log("可移动");
        this.board[zeroIndex] = this.board[index];
        this.board[index] = 0;
        this.addCount();

      }
    }
  }

  getZero(): number {
    for (var i = 0; i < 9; i++) {
      if (this.board[i] == 0) {
        return Math.round(i);
      }
    }
    alert("出错了！");
    return -1;
  }

  getMoves(): number[] {
    // 获取所有可移动方向
    let moves = [];
    let zeroIndex = this.getZero();
    // console.log("zero at " + zeroIndex);
    // 二维坐标
    let i = parseInt(String(zeroIndex / 3.0));

    let j = parseInt(String(zeroIndex % 3.0));
    let fourDirection = [
      [i, j - 1],
      [i, j + 1],
      [i - 1, j],
      [i + 1, j],
    ]; // 左右下上

    for (let k in fourDirection) {
      if (
        fourDirection[k][0] >= 0 &&
        fourDirection[k][0] < 3 &&
        fourDirection[k][1] >= 0 &&
        fourDirection[k][1] < 3
      ) {
        // 二维坐标转一维下标
        moves.push(Math.round(fourDirection[k][0] * 3 + fourDirection[k][1]));
      }
    }
    return moves;
  }

}
