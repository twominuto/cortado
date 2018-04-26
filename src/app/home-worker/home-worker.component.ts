import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-home-worker',
  templateUrl: './home-worker.component.html',
  styleUrls: ['./home-worker.component.css']
})
export class HomeWorkerComponent {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
} 
export interface Element {
  name: string;
  position: number;
  workhour: string;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', workhour: 'Night', symbol: 'H'},
  {position: 2, name: 'Helium', workhour: 'Night', symbol: 'He'},
  {position: 3, name: 'Lithium', workhour: 'Night', symbol: 'Li'},
  {position: 4, name: 'Beryllium', workhour: 'Night', symbol: 'Be'},
  {position: 5, name: 'Boron', workhour: 'Night', symbol: 'B'},
  {position: 6, name: 'Carbon', workhour: 'Night', symbol: 'C'},
  {position: 7, name: 'Nitrogen', workhour: 'Night', symbol: 'N'},
  {position: 8, name: 'Oxygen', workhour: 'Night', symbol: 'O'},
  {position: 9, name: 'Fluorine', workhour: 'Night', symbol: 'F'},
  {position: 10, name: 'Neon', workhour: 'Night', symbol: 'Ne'},
  {position: 11, name: 'Sodium', workhour: 'Night', symbol: 'Na'},
  {position: 12, name: 'Magnesium', workhour: 'Night', symbol: 'Mg'},
  {position: 13, name: 'Aluminum', workhour: 'Night', symbol: 'Al'},
  {position: 14, name: 'Silicon', workhour: 'Night', symbol: 'Si'},
  {position: 15, name: 'Phosphorus', workhour: 'Night', symbol: 'P'},
  {position: 16, name: 'Sulfur', workhour: 'Night', symbol: 'S'},
  {position: 17, name: 'Chlorine', workhour: 'Night', symbol: 'Cl'},
  {position: 18, name: 'Argon', workhour: 'Night', symbol: 'Ar'},
  {position: 19, name: 'Potassium', workhour: 'Night', symbol: 'K'},
  {position: 20, name: 'Calcium', workhour: 'Night', symbol: 'Ca'},
];




/*implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/