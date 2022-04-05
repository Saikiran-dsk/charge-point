import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  isOpened = false;
  isChecked = false;
  constructor() { }

  ngOnInit(): void {
  }
  openCollapser(item: any) {
    item.isCollapsed = !item.isCollapsed;
  }
  data: any = [
    {
      filterName: "By City",
      isCollapsed: false,
      type: "city",
      cityList: [
        { name: "Benguluru", isChecked: false },
        { name: "Hyderabad", isChecked: false },
        { name: "Chennai", isChecked: false },
      ]

    },
    {
      filterName: "Near by location",
      isCollapsed: false,
      type: "near_by_location",
      cityList: [
        { name: "Kphp", isChecked: false },
        { name: "Kukatpally", isChecked: false },
        { name: "Miyapur", isChecked: false },
        { name: "Hafeexpet", isChecked: false }
      ]

    },
    {
      filterName: "By Vehicle Type",
      isCollapsed: false,
      type: "vehicle_type",
      cityList: [
        { name: "Car", isChecked: false },
        { name: "Bike", isChecked: false },
        { name: "Bus", isChecked: false }
      ]

    },
    {
      filterName: "Distance",
      isCollapsed: false,
      type: "distance",
      cityList: [
        { name: "Under 1km", value: 1, isChecked: false },
        { name: "Under 2km", value: 2, isChecked: false },
        { name: "Under 3km", value: 3, isChecked: false },
        { name: "Under 4km", value: 4, isChecked: false }
      ]

    },
    {
      filterName: "Rating",
      isCollapsed: false,
      type: 'rating',
      isRating: true,
      ratingList: [
        { ratingValue: 5, isChecked: false },
        { ratingValue: 4, isChecked: false },
        { ratingValue: 3, isChecked: false },
        { ratingValue: 2, isChecked: false },
        { ratingValue: 1, isChecked: false },
      ]

    },
    {
      filterName: "Open Now",
      isCollapsed: false,
      type: "timings",
      cityList: [
        { name: "24/7", value: '24-7', isChecked: false },
        { name: "9am-5pm", value: 'day', isChecked: false },
        { name: "5pm-6am", value: 'night', isChecked: false },]

    },
    {
      filterName: "Waiting Time",
      isCollapsed: false,
      type: 'delay_time',
      cityList: [
        { name: "1hr", isChecked: false },
        { name: "2hr", isChecked: false },
        { name: "3hr", isChecked: false },
        { name: "4hr", isChecked: false },
        { name: "Other", isChecked: false },
      ]

    },
    {
      filterName: "Price",
      isCollapsed: false,
      type: 'price',
      cityList: [
        { name: "100-200", isChecked: false },
        { name: "200-500", isChecked: false },
        { name: "500-1000", isChecked: false },
        { name: "1000-2000", isChecked: false },
        { name: "Other", isChecked: false },
      ]
    },
  ]
  getIconBasedOntype(filterName: string) {
    if (filterName == "near_by_location") {
      return "my_location"
    } else if (filterName == "price") {
      return "money"
    } else if (filterName == "city") {
      return "location_city"
    } else if (filterName == "vehicle_type") {
      return "directions_car"
    } else if (filterName == "distance") {
      return "navigation"
    } else if (filterName == "timings") {
      return "access_time"
    } else if (filterName == "delay_time") {
      return "timelapse"
    } else if (filterName == "rating") {
      return "stars"
    } else {
      return ''
    }
  }
}
