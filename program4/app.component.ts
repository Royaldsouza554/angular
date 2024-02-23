import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'program4';
  number: number = 0;
  factorialResult: number = 1;
  squareResult: number = 0;

  calculateFactorial() {
    this.factorialResult = this.factorial(this.number);
  }

  factorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * this.factorial(n - 1);
    }
  }

  calculateSquare() {
    this.squareResult = this.number * this.number;
  }
}
