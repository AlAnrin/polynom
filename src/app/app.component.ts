import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  points: {x: number, y: number}[] = [
    // {x: 1, y: 5},
    // {x: 2, y: 15},
    // {x: 3, y: 8},
    // {x: 4, y: 22}
  ];
  res = {
    a: 0,
    b: 0,
    c: 0,
    d: 0
  };

  resultStr = '';

  pointCounts: {x: number, y: number}[] = [];

  constructor() {
  }

  addPoint(): void {
    this.points = [
      ...this.points,
      {x: 0, y: 0}
    ];
  }

  addCountPoint(): void {
    this.pointCounts = [
      ...this.pointCounts,
      {x: 0, y: 0}
    ];
  }

  deleteCountPoint(i: number): void {
    this.pointCounts = [
      ...this.pointCounts.slice(0, i),
      ...this.pointCounts.slice(i + 1)
    ];
  }

  count(): void {

    let diff: number[][] = [];
    for (const point of this.points) {
      const lev = [];
      lev.push(Math.pow(point.x, 3));
      lev.push(Math.pow(point.x, 2));
      lev.push(+point.x);
      lev.push(1);
      lev.push(+point.y);

      diff.push(lev);
    }

    console.log(diff);

    const one = diff[0].map((x, i) => x - diff[1][i]);
    const two = diff[3].map((x, i) => x - diff[2][i]);
    const three = diff[2].map((x, i) => x - diff[1][i]);

    console.log(one, two, three);
    let twoDiff: number[] = [];
    if (one[2] === two[2]) {
      twoDiff = one.map((x, i) => x - two[i]);
    }
    else {
      const coef = one[2]/two[2];
      console.log(coef);
      twoDiff = one.map((x, i) => x - coef * two[i]);
    }
    console.log(twoDiff);
    let threeDiff: number[] = [];
    if (three[2] === two[2]) {
      threeDiff = three.map((x, i) => x - two[i]);
    }
    else {
      const coef = three[2]/two[2];
      console.log(coef);
      threeDiff = three.map((x, i) => x - coef * two[i]);
    }
    console.log(threeDiff);

    let aFind = [];
    if (twoDiff[1] === threeDiff[1]) {
      aFind = twoDiff.map((x, i) => x - threeDiff[i]);
    }
    else {
      const coef = twoDiff[1]/threeDiff[1];
      console.log(coef);
      aFind = twoDiff.map((x, i) => x - coef * threeDiff[i]);
    }

    console.log(aFind);

    this.res.a = aFind[4]/aFind[0];
    this.res.b = (twoDiff[4] - twoDiff[0] * this.res.a) / twoDiff[1];
    this.res.c = (one[4] - one[0] * this.res.a - one[1] * this.res.b) / one[2];
    this.res.d = diff[0][4] - diff[0][0] * this.res.a - diff[0][1] * this.res.b - diff[0][2] * this.res.c;

    console.log(this.res);

    this.resultStr = `y = ${this.res.a} * x^3 ${this.res.b < 0 ? '-' : '+'} ${Math.abs(this.res.b)} * x^2 ${this.res.c < 0 ? '-' : '+'} ${Math.abs(this.res.c)} * x ${this.res.d < 0 ? '-' : '+'} ${Math.abs(this.res.d)}`;
  }

  countPoint(i: number): void {
    const x = this.pointCounts[i].x;

    const y = this.res.a * Math.pow(x, 3) + this.res.b * Math.pow(x, 2) + this.res.c * x + this.res.d;
    this.pointCounts = [
      ...this.pointCounts.slice(0, i),
      {x, y},
      ...this.pointCounts.slice(i + 1)
    ];
  }
}
