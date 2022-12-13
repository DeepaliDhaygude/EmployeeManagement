import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  empArray: any;
  searchById: string;
  searchByEmployeeName: string;
  searchByPosition: string;
  searchByJoiningDate: Date;
  sortFlag: boolean;
  searchBytext : string;

  constructor(private http: HttpClient) {
    this.empArray = [];
    this.searchById = '';
    this.searchByEmployeeName = '';
    this.searchByPosition = '';
    this.searchByJoiningDate = new Date();
    this.sortFlag = true;
    this.searchBytext ='';
  }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee() {
    this.http
      .get('http://localhost:3000/Employee')
      .subscribe((response: any) => {
        this.empArray = response;
      });
  }


  sort(para: any) {
    if (this.sortFlag == true) {
      this.ASCSort(para);
      this.sortFlag = false;
    } else {
      this.DESCSort(para);
      this.sortFlag = true;
    }
  }
  ASCSort(sortby: any) {
    debugger;

    let filteredData;
    switch (sortby) {
      case 'Id':
        filteredData = this.empArray.sort((a: any, b: any) =>
          a.empId.localeCompare(b.empId)
        );
        this.empArray = filteredData;
        break;
      case 'EmployeeName':
        filteredData = this.empArray.sort((a: any, b: any) =>
          a.empName.localeCompare(b.empName)
        );
        this.empArray = filteredData;
        break;
      case 'Position':
        filteredData = this.empArray.sort((a: any, b: any) =>
          a.position.localeCompare(b.position)
        );
        this.empArray = filteredData;
        break;
      case 'JoiningDate':
        filteredData = this.empArray.sort((a: any, b: any) =>
          a.joiningDate.localeCompare(b.joiningDate)
        );
        this.empArray = filteredData;
        break;

      default:
        filteredData = this.empArray.sort((a: any, b: any) =>
          String(a.mySr).localeCompare(String(b.mySr))
        );
        this.empArray = filteredData;
        break;
    }
  }

  DESCSort(sortby: any) {
    debugger;

    let filteredData;
    switch (sortby) {
      case 'Id':
        filteredData = this.empArray.sort((a: any, b: any) =>
          a.empId.localeCompare(b.empId)
        );
        this.empArray = filteredData.reverse();
        break;
      case 'EmployeeName':
        filteredData = this.empArray.sort((a: any, b: any) =>
          a.empName.localeCompare(b.empName)
        );
        this.empArray = filteredData.reverse();
        break;
      case 'Position':
        filteredData = this.empArray.sort((a: any, b: any) =>
          a.position.localeCompare(b.position)
        );
        this.empArray = filteredData.reverse();
        break;
      case 'JoiningDate':
        filteredData = this.empArray.sort((a: any, b: any) =>
          a.joiningDate.localeCompare(b.joiningDate)
        );
        this.empArray = filteredData.reverse();
        break;
    }
  }
}
