import { Component, Input } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { BookI } from '../../share/models/book.interface';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  @Input() book!: BookI;
}
