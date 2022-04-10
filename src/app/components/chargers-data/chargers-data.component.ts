import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewMapComponent } from '../view-map/view-map.component';
@Component({
  selector: 'app-chargers-data',
  templateUrl: './chargers-data.component.html',
  styleUrls: ['./chargers-data.component.scss']
})
export class ChargersDataComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  cardsData = [
    {
      id: 1,
      name: 'Sasha charge point ',
      address: 'address 1',
      phone: '9988998899',
      city: 'Hyderbad',
      pincode: '500085',
      distance: '1km',
      latitued: '',
      languitude: '',
      price: '100',
      minPrice: '200',
      maxPrice: '500',
      rating: 5,
      nearByLocation: ['KPHP', 'Kukatapally'],
      chargePoints: ['car', 'bike', 'bus'],
      opensAt: '24/7',
      waitingTime: '1h'
    },
    {
      id: 2,
      name: 'Sasha charge point',
      address: 'address 2',
      phone: '9988998899',
      city: 'Hyderbad',
      pincode: '500085',
      distance: '1km',
      latitued: '',
      languitude: '',
      price: '100',
      minPrice: '2000',
      maxPrice: '3000',
      rating: 5,
      nearByLocation: ['KPHP', 'Kukatapally'],
      chargePoints: ['car', 'bike', 'bus'],
      opensAt: '24/7',
      waitingTime: '20m',
    },
    {
      id: 3,
      name: 'Sasha charge point',
      address: 'address 3',
      phone: '9988998899',
      city: 'Hyderbad',
      pincode: '500085',
      distance: '1km',
      latitued: '',
      languitude: '',
      price: '100',
      minPrice: '100',
      maxPrice: '200',
      rating: 5,
      nearByLocation: ['KPHP', 'Kukatapally'],
      chargePoints: ['car', 'bike', 'bus'],
      opensAt: '24/7',
      waitingTime: '2h'
    },
    {
      id: 4,
      name: 'Sasha charge point',
      address: 'address 4',
      phone: '9988998899',
      city: 'Hyderbad',
      pincode: '500085',
      distance: '1km',
      latitued: '',
      languitude: '',
      price: '100',
      minPrice: '1000',
      maxPrice: '2000',
      rating: 5,
      nearByLocation: ['KPHP', 'Kukatapally'],
      chargePoints: ['car', 'bike', 'bus'],
      opensAt: '24/7',
      waitingTime: '0'
    },
    {
      id: 5,
      name: 'Sasha charge point',
      address: 'address 5',
      phone: '9988998899',
      city: 'Hyderbad',
      pincode: '500085',
      distance: '1km',
      latitued: '',
      languitude: '',
      price: '100',
      minPrice: '500',
      maxPrice: '1000',
      rating: 5,
      nearByLocation: ['KPHP', 'Kukatapally'],
      chargePoints: ['car', 'bike', 'bus'],
      opensAt: '24/7',
      waitingTime: '2h'
    },
    {
      id: 6,
      name: 'Sasha charge point',
      address: 'address 6',
      phone: '9988998899',
      city: 'Hyderbad',
      pincode: '500085',
      distance: '1km',
      latitued: '',
      languitude: '',
      price: '100',
      minPrice: '200',
      maxPrice: '500',
      rating: 5,
      nearByLocation: ['KPHP', 'Kukatapally'],
      chargePoints: ['car', 'bike', 'bus'],
      opensAt: '24/7',
      waitingTime: '15m'
    },
  ]

  ngOnInit(): void {
    this.data.length = 100;
  }
  data = [];
  openDialog() {
    const dialogRef = this.dialog.open(ViewMapComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
