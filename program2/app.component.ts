import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pgm002';
  shoppingItems: string[] = ['Apples', 'Bananas', 'Bread']; // Default values

  addItem(newItem: string): void {
    if (newItem && newItem.trim() !== '') {
      this.shoppingItems.push(newItem.trim());
    }
  }

  removeItem(item: string): void {
    const index = this.shoppingItems.indexOf(item);
    if (index !== -1) {
      this.shoppingItems.splice(index, 1);
    }
  }
}