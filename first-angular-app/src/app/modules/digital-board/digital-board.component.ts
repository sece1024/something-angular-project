import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-digital-board',
  templateUrl: './digital-board.component.html',
  styleUrls: ['./digital-board.component.scss']
})
export class DigitalBoardComponent implements OnInit {
  @Input() clickCount: number = 0;
  board = [1, 2, 3, 4, 5, 6, 7, 8, 0];
  originBoard = [1, 2, 3, 4, 5, 6, 7, 8, 0];
  clickedCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  move(index: number): void {
    console.log("you click ", this.board[index]);
    if (this.board[index] != 0) {
      this.doMove(index);
      if (this.board.toString() == this.originBoard.toString()) {
        alert("You Win!");
      }
    }
  }

  doMove(indexShouldMove: number): void {
    let moves = this.getMoves();
    let zeroIndex = this.getZeroIndex();
    for (let index = 0; index < moves.length; index++) {
      if (moves[index] == indexShouldMove) {
        this.board[zeroIndex] = this.board[indexShouldMove];
        this.board[indexShouldMove] = 0;
        this.addCount();
      }
    }
  }

  private addCount() {
    this.clickedCount++;
  }

  reset(): void {
    this.clickedCount = 0;
    this.board = [1, 2, 3, 4, 5, 6, 7, 8, 0];
  }

  getZeroIndex(): number {
    for (let i = 0; i < 9; i++) {
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
    let zeroIndex = this.getZeroIndex();
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
