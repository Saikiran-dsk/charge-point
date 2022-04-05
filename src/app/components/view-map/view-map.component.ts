import { Component, OnInit } from '@angular/core';
// import { MouseEvent } from "@agm/core";

@Component({
  selector: 'app-view-map',
  templateUrl: './view-map.component.html',
  styleUrls: ['./view-map.component.scss']
})
export class ViewMapComponent implements OnInit {
  ngOnInit(): void {

  }
}
//   // google maps zoom level
//   zoom: number = 8;

//   // initial center position for the map  
//   lat: number = 51.673858;
//   lng: number = 7.815982;

//   ngOnInit(): void {

//   }
//   clickedMarker(label: string, index: number) {
//     console.log(`clicked the marker: ${label || index}`)
//   }

//   mapClicked($event: any) {
//     // this.markers.push({
//     //   lat: $event.coords.lat,
//     //   lng: $event.coords.lng,
//     //   draggable: true
//     // });
//   }

//   markerDragEnd(m: marker, $event: any) {
//     // console.log('dragEnd', m, $event);
//   }

//   markers: marker[] = [
//     {
//       lat: 51.673858,
//       lng: 7.815982,
//       label: 'A',
//       draggable: true
//     },
//     {
//       lat: 51.373858,
//       lng: 7.215982,
//       label: 'B',
//       draggable: false
//     },
//     {
//       lat: 51.723858,
//       lng: 7.895982,
//       label: 'C',
//       draggable: true
//     }
//   ]
// }

// // just an interface for type safety.
// interface marker {
//   lat: number;
//   lng: number;
//   label?: string;
//   draggable: boolean;
// }

