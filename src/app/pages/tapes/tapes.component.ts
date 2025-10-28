import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tape {
  id: number;
  title: string;
  artist: string;
  genre: string;
  condition: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-tapes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tapes.component.html',
  styleUrl: './tapes.component.scss'
})
export class TapesComponent {
  sampleTapes: Tape[] = [
    {
      id: 1,
      title: "Hotel California",
      artist: "Eagles",
      genre: "Rock",
      condition: "Good",
      price: 12.99,
      image: "/assets/images/placeholder-tape.jpg"
    },
    {
      id: 2,
      title: "Rumours",
      artist: "Fleetwood Mac",
      genre: "Rock",
      condition: "Very Good",
      price: 15.99,
      image: "/assets/images/placeholder-tape.jpg"
    },
    {
      id: 3,
      title: "Saturday Night Fever",
      artist: "Bee Gees",
      genre: "Disco",
      condition: "Excellent",
      price: 18.99,
      image: "/assets/images/placeholder-tape.jpg"
    },
    {
      id: 4,
      title: "Frampton Comes Alive",
      artist: "Peter Frampton",
      genre: "Rock",
      condition: "Good",
      price: 14.99,
      image: "/assets/images/placeholder-tape.jpg"
    }
  ];
}
