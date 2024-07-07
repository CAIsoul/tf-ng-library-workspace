import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GridModule } from '@progress/kendo-angular-grid';

const PATROL_POINTS = [
  {
    "Name": "Regent St-2118",
    "Street": "Regent St",
    "XCoord": -73.897665,
    "YCoord": 42.814800,
    "Speed": 40.233500,
    "GeoStreet": "1448 Regent St",
    "GeoCity": "Niskayuna",
    "GeoCounty": "Schenectady",
    "GeoZip": "12309",
    "LastVisitedDevice": "",
    "LastVisitedTime": null,
    "LastVisitedBy": "",
    "TimeToGoal": 0.000000,
    "Id": 587
  },
  {
    "Name": "Nott St-2128",
    "Street": "Nott St",
    "XCoord": -73.900212,
    "YCoord": 42.816526,
    "Speed": 56.326900,
    "GeoStreet": "2024 Nott St",
    "GeoCity": "Niskayuna",
    "GeoCounty": "Schenectady",
    "GeoZip": "12309",
    "LastVisitedDevice": "",
    "LastVisitedTime": null,
    "LastVisitedBy": "",
    "TimeToGoal": 0.000000,
    "Id": 591
  },
  {
    "Name": "Kingston Ave-2132",
    "Street": "Kingston Ave",
    "XCoord": -73.902385,
    "YCoord": 42.818789,
    "Speed": 40.233500,
    "GeoStreet": "1553 Lexington Pkwy",
    "GeoCity": "Niskayuna",
    "GeoCounty": "Schenectady",
    "GeoZip": "12309",
    "LastVisitedDevice": "",
    "LastVisitedTime": null,
    "LastVisitedBy": "",
    "TimeToGoal": 0.000000,
    "Id": 594
  },
  {
    "Name": "Baker Ave-2134",
    "Street": "Baker Ave",
    "XCoord": -73.901648,
    "YCoord": 42.817916,
    "Speed": 40.233500,
    "GeoStreet": "1530 Baker Ave",
    "GeoCity": "Niskayuna",
    "GeoCounty": "Schenectady",
    "GeoZip": "12309",
    "LastVisitedDevice": "",
    "LastVisitedTime": null,
    "LastVisitedBy": "",
    "TimeToGoal": 0.000000,
    "Id": 597
  },
  {
    "Name": "Baker Ave-2138",
    "Street": "Baker Ave",
    "XCoord": -73.902799,
    "YCoord": 42.813930,
    "Speed": 40.233500,
    "GeoStreet": "1918 Grand Blvd",
    "GeoCity": "Schenectady",
    "GeoCounty": "Schenectady",
    "GeoZip": "12309",
    "LastVisitedDevice": "",
    "LastVisitedTime": null,
    "LastVisitedBy": "",
    "TimeToGoal": 0.000000,
    "Id": 600
  },
  {
    "Name": "Grand Blvd-2139",
    "Street": "Grand Blvd",
    "XCoord": -73.903259,
    "YCoord": 42.814437,
    "Speed": 40.233500,
    "GeoStreet": "1925 Grand Blvd",
    "GeoCity": "Schenectady",
    "GeoCounty": "Schenectady",
    "GeoZip": "12309",
    "LastVisitedDevice": "",
    "LastVisitedTime": null,
    "LastVisitedBy": "",
    "TimeToGoal": 0.000000,
    "Id": 604
  },
  {
    "Name": "Garner Ave-2141",
    "Street": "Garner Ave",
    "XCoord": -73.903842,
    "YCoord": 42.814688,
    "Speed": 40.233500,
    "GeoStreet": "1898 Grand Blvd",
    "GeoCity": "Schenectady",
    "GeoCounty": "Schenectady",
    "GeoZip": "12309",
    "LastVisitedDevice": "",
    "LastVisitedTime": null,
    "LastVisitedBy": "",
    "TimeToGoal": 0.000000,
    "Id": 608
  },
  {
    "Name": "Grand Blvd-2143",
    "Street": "Grand Blvd",
    "XCoord": -73.904431,
    "YCoord": 42.814833,
    "Speed": 40.233500,
    "GeoStreet": "1850 Grand Blvd",
    "GeoCity": "Schenectady",
    "GeoCounty": "Schenectady",
    "GeoZip": "12309",
    "LastVisitedDevice": "",
    "LastVisitedTime": null,
    "LastVisitedBy": "",
    "TimeToGoal": 0.000000,
    "Id": 612
  }
];

@Component({
  selector: 'lib-custom-kendogrid',
  standalone: true,
  imports: [GridModule],
  templateUrl: './custom-kendogrid.component.html',
  styleUrl: './custom-kendogrid.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CustomKendogridComponent implements OnInit {

  public gridData: any[] = PATROL_POINTS;
  public selectedIds: number[] = [];

  public ngOnInit(): void {

  }
}
