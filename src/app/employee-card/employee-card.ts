import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  imports: [],
  templateUrl: './employee-card.html',
  styleUrl: './employee-card.css',
})
export class EmployeeCard {
  name: string = 'Nishant Narula';
  role: string = 'Backend Developer';
  yearsOfExperience: number = 8;

  promote():void{
     this.role = 'Senior Backend Developer';
  }
}
