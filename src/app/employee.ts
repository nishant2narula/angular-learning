import { Injectable } from '@angular/core';


export interface Employee{
  id: number,
  name: string,
  role: string;
  yearsOfExperience: number;
}

@Injectable({
  providedIn: 'root',
})

export class EmployeeService {
  private employees: Employee[] = [
    { id: 1, name: 'John Doe', role: 'Backend Developer', yearsOfExperience: 5 },
    { id: 2, name: 'Jane Smith', role: 'Frontend Developer', yearsOfExperience: 3 },
    { id: 3, name: 'Raj Patel', role: 'DevOps Engineer', yearsOfExperience: 7 },
    { id: 4, name: 'Emily Chen', role: 'QA Engineer', yearsOfExperience: 1 }
  ];
  getEmployees(): Employee[] {
    return this.employees;
  }
  addEmployee(emp: Employee): void {
    this.employees.push(emp);
  }

}
