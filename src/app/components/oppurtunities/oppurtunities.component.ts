import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oppurtunities',
  templateUrl: './oppurtunities.component.html',
  styleUrls: ['./oppurtunities.component.scss'],
})
export class OppurtunitiesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  getRandomColor() {
    var r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
  }
}
