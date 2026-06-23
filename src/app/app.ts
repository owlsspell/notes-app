import { Component, signal, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Note } from './models/note.model';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, DatePipe, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // protected readonly title = signal('angular-app');
  protected readonly notes = signal<Note[]>([
    {
      id: 1,
      title: 'First note',
      content: 'This is a first note',
      createdAt: new Date('2026-01-01T12:00:00'),
    },
    {
      id: 2,
      title: 'Second note',
      content: 'This is a second note',
      createdAt: new Date('2026-01-01T12:10:00'),
    },
  ]);

  constructor() {
    effect(() => {
      console.log('Notes', this.notes());
    });
  }
}
