import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../employee';


@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit {
      employees: Employee[] = [];

      constructor(private employeeService: EmployeeService) {}

      ngOnInit(): void {
        this.employees = this.employeeService.getEmployees();
      }
}
