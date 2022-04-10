import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app : booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  selectedTime: any = "";
  cost = 0;

  paymentSuccess = false;
  count = 1;
  constructor() { }

  ngOnInit(): void {
  }

  timeStamp = [
    { time: "00 : 01", isActive: true, isAvailble: true },
    { time: "01 : 02", isActive: false, isAvailble: false, },
    { time: "02 : 03", isActive: false, isAvailble: true, },
    { time: "03 : 04", isActive: false, isAvailble: true, },
    { time: "04 : 05", isActive: false, isAvailble: true, },
    { time: "05 : 06", isActive: false, isAvailble: true, },
    { time: "06 : 07", isActive: false, isAvailble: true, },
    { time: "07 : 08", isActive: false, isAvailble: true, },
    { time: "08 : 09", isActive: false, isAvailble: true, },
    { time: "09 : 10", isActive: false, isAvailble: true, },
    { time: "10 : 11", isActive: false, isAvailble: true, },
    { time: "11 : 12", isActive: false, isAvailble: true, },
    { time: "12 : 13", isActive: false, isAvailble: true, },
    { time: "13 : 14", isActive: false, isAvailble: true, },
    { time: "14 : 15", isActive: false, isAvailble: true, },
    { time: "15 : 16", isActive: false, isAvailble: true, },
    { time: "16 : 17", isActive: false, isAvailble: true, },
    { time: "17 : 18", isActive: false, isAvailble: true, },
    { time: "18 : 19", isActive: false, isAvailble: true, },
    { time: "19 : 20", isActive: false, isAvailble: true, },
    { time: "20 : 21", isActive: false, isAvailble: true, },
    { time: "21 : 22", isActive: false, isAvailble: true, },
    { time: "22 : 23", isActive: false, isAvailble: true, },
    { time: "23 : 24", isActive: false, isAvailble: true, },
  ]
  selectTime(selectedTimeStamp: any) {
    // this.updateTime()
    if (selectedTimeStamp.isAvailble && this.count) {
      if (!selectedTimeStamp.isActive) {
        selectedTimeStamp.isActive = true;
        this.count = this.count + 1;
      } else {
        if (this.count > 1) {
          this.count = this.count - 1;
          selectedTimeStamp.isActive = false;
        }

      }

    }

  }

  updateTime() {
    this.timeStamp.forEach((item) => {
      item.isActive = false;
    })
  }
  updatePayement() {
    this.paymentSuccess = true;
  }
}
