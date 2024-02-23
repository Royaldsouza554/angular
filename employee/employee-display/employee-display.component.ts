import { Component } from '@angular/core';
import { Employee } from '../employee.model';
import { CommonModule} from '@angular/common';


@Component({
  selector: 'app-employee-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-display.component.html',
  styleUrl: './employee-display.component.css'
})
export class EmployeeDisplayComponent {
  employees: Employee[] = [
    
      {id:1,name:'John doe', salary:50000},
      {id:2,name:'vipin lauda', salary:6000},
      {id:3,name:'ravi baje', salary:50000},
    
  ]
}
