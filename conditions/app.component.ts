import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employee';
  name:string= '';
  age:number = 0;

  submitDetails(){
    alert(`Details Submitted is ,\nName: ${this.name} \nAge: ${this.age}`);
  }

  employee =[
    {
      name: 'Royal',
      age:19
    },
    {
      name: 'Manish',
      age:20
    },
    {
      name: 'Prapthi',
      age:21
    },
    {
      name: 'Pratham',
      age:20
    },
    {
      name: 'Poornesh',
      age:19
    }
  ]
  
}