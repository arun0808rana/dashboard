import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ongoing-applications',
  templateUrl: './ongoing-applications.component.html',
  styleUrls: ['./ongoing-applications.component.scss'],
})
export class OngoingApplicationsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  handleJobCards(id, e) {
    let el = document.getElementById(id);
    el.classList.toggle('job-active');

    document.querySelector(`#${id} .jobTitle`).classList.toggle('right');
    document.querySelector(`#${id} .jobTitle`).classList.toggle('down');
  }
}
