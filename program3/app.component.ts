import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';
  firstNum: number = 0;
  secondNum: number = 0;
  result: number | string = 0;

  add() {
    this.result = this.firstNum + this.secondNum;
  }

  subtract() {
    this.result = this.firstNum - this.secondNum;
  }

  multiply() {
    this.result = this.firstNum * this.secondNum;
  }

  divide() {
    try {
      this.result = this.firstNum / this.secondNum;
    } catch (error) {
      this.result = "infinity";
    }
  }
}
