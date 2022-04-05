import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  date = new Date();
  year = 1997;
  constructor() {
    this.year = this.date.getFullYear()
  }
  ngOnInit(): void {
  }

}
