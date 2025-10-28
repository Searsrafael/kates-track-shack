import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Player {
  id: number;
  name: string;
  type: string;
  category: 'portable' | 'car-indash' | 'car-underdash';
  description: string;
  condition: string;
  features: string[];
  originalPrice: number;
  salePrice: number;
  images: string[];
  inStock: boolean;
}

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss'
})
export class PlayersComponent {
  activeCategory: string = 'portable';

  players: Player[] = [
    {
      id: 1,
      name: 'GE 3-5530C Stereo AM/FM Portable "Splitter"',
      type: 'Portable Splitter',
      category: 'portable',
      description: 'Sounds good as most GEs do! General wear. Battery compartment has a bit of wear. Crack on the bottom of one side.',
      condition: 'Good',
      features: ['AM/FM Radio', 'Stereo Sound', 'Battery/AC Power', 'Portable Design'],
      originalPrice: 240,
      salePrice: 120,
      images: ['/assets/images/players/ge-splitter-1.jpg', '/assets/images/players/ge-splitter-2.jpg'],
      inStock: true
    },
    {
      id: 2,
      name: 'GE 3-5520C (TEA) Stereo Portable "Splitter"',
      type: 'Portable Splitter',
      category: 'portable',
      description: 'These are great players! Sounds good!',
      condition: 'Very Good',
      features: ['Stereo Sound', 'Battery/AC Power', 'Excellent Audio Quality'],
      originalPrice: 280,
      salePrice: 140,
      images: ['/assets/images/players/ge-splitter-tea-1.jpg'],
      inStock: true
    },
    {
      id: 3,
      name: 'GE-M8616A Stereo Portable "Splitter"',
      type: 'Portable Splitter',
      category: 'portable',
      description: 'This one is in average shape. Would make a good garage or Man cave player. Comes with powercord. Has been tested and plays well.',
      condition: 'Average - Missing battery doors',
      features: ['Stereo Sound', 'Portable Design', 'Includes Power Cord'],
      originalPrice: 250,
      salePrice: 125,
      images: ['/assets/images/players/ge-m8616a-1.jpg'],
      inStock: true
    },
    {
      id: 4,
      name: 'Belair 394 "Splitter"',
      type: 'Portable Splitter',
      category: 'portable',
      description: 'Large "splitter". AC/DC power. Has some wear. May have been a garage player. Would make a great garage or outdoor player.',
      condition: 'Good - Paint spatter',
      features: ['AC/DC Power', 'Large Size', 'Rugged Design'],
      originalPrice: 270,
      salePrice: 135,
      images: ['/assets/images/players/belair-394-1.jpg'],
      inStock: true
    },
    {
      id: 5,
      name: 'Learjet P-550 Splitter',
      type: 'Portable Splitter',
      category: 'portable',
      description: 'Nice little splitter! Sounds good! Great players! Normal wear.',
      condition: 'Very Good',
      features: ['Compact Design', 'Excellent Sound', 'Learjet Brand Quality'],
      originalPrice: 300,
      salePrice: 150,
      images: ['/assets/images/players/learjet-p550-1.jpg'],
      inStock: true
    },
    {
      id: 6,
      name: 'Music Master Stereo',
      type: 'Component Player',
      category: 'portable',
      description: 'Nice little unit! Serviced and in pretty nice shape with minor cosmetic damage. Just add speakers and you\'re ready to go! Plays well!',
      condition: 'Very Good',
      features: ['Component Style', 'Serviced', 'Speaker Outputs'],
      originalPrice: 250,
      salePrice: 125,
      images: ['/assets/images/players/music-master-1.jpg'],
      inStock: true
    },
    {
      id: 7,
      name: 'Centrex TH-30',
      type: 'Component Player',
      category: 'portable',
      description: 'Nice little plug/play component. Serviced and in pretty nice shape with minor cosmetic damage. Just plug into your receiver/amplifier and you\'re ready to go!',
      condition: 'Very Good',
      features: ['Plug & Play', 'Component Design', 'Serviced'],
      originalPrice: 250,
      salePrice: 125,
      images: ['/assets/images/players/centrex-th30-1.jpg'],
      inStock: true
    },
    {
      id: 8,
      name: 'RCA Mark 8 Stereo Component',
      type: 'Component Player',
      category: 'portable',
      description: 'Nice little plug/play component. Just plug into your receiver/amplifier and you\'re ready to go! This one is pretty heavy for its size!',
      condition: 'Good',
      features: ['RCA Quality', 'Heavy Duty Build', 'Component Design'],
      originalPrice: 250,
      salePrice: 125,
      images: ['/assets/images/players/rca-mark8-1.jpg'],
      inStock: true
    },
    {
      id: 9,
      name: 'PAX PR-650 Player/Recorder',
      type: 'Player/Recorder',
      category: 'portable',
      description: 'Very early machine. Plays great and records okay. These early machines just didn\'t have the power later models had. All cables included.',
      condition: 'Good',
      features: ['Record Capability', 'Early Model', 'All Cables Included', 'Vintage Design'],
      originalPrice: 250,
      salePrice: 125,
      images: ['/assets/images/players/pax-pr650-1.jpg'],
      inStock: true
    },
    {
      id: 10,
      name: 'Lloyds AM/FM 8-Track Receiver',
      type: 'Receiver',
      category: 'portable',
      description: 'Customer trade in. All necessary repairs made to it and it plays great!',
      condition: 'Excellent - Refurbished',
      features: ['AM/FM Radio', 'Full Receiver', 'Recently Serviced'],
      originalPrice: 300,
      salePrice: 150,
      images: ['/assets/images/players/lloyds-receiver-1.jpg'],
      inStock: true
    },
    // Car Players - In-Dash
    {
      id: 11,
      name: 'Pioneer TP-900 In-Dash',
      type: 'In-Dash Car Player',
      category: 'car-indash',
      description: 'Classic Pioneer in-dash 8-track player. Fully serviced and ready to install in your classic car.',
      condition: 'Excellent - Refurbished',
      features: ['In-Dash Mount', 'Pioneer Quality', 'AM/FM Radio', 'Classic Design'],
      originalPrice: 400,
      salePrice: 200,
      images: ['/assets/images/players/pioneer-tp900-1.jpg'],
      inStock: true
    },
    {
      id: 12,
      name: 'Motorola TM-804 In-Dash',
      type: 'In-Dash Car Player',
      category: 'car-indash',
      description: 'Vintage Motorola in-dash unit. Perfect for restoration projects. Has been tested and works well.',
      condition: 'Good',
      features: ['Motorola Brand', 'Classic Styling', 'Easy Installation'],
      originalPrice: 300,
      salePrice: 150,
      images: ['/assets/images/players/motorola-tm804-1.jpg'],
      inStock: true
    },
    // Car Players - Under-Dash
    {
      id: 13,
      name: 'Automatic Radio 8-Track Under-Dash',
      type: 'Under-Dash Car Player',
      category: 'car-underdash',
      description: 'Classic under-dash 8-track player. Mounts easily under dashboard. Great for classic car restoration.',
      condition: 'Very Good',
      features: ['Under-Dash Mount', 'Easy Installation', 'Classic Design', 'Vintage Styling'],
      originalPrice: 350,
      salePrice: 175,
      images: ['/assets/images/players/automatic-radio-1.jpg'],
      inStock: true
    },
    {
      id: 14,
      name: 'Craig 8-Track Under-Dash Unit',
      type: 'Under-Dash Car Player',
      category: 'car-underdash',
      description: 'Craig brand under-dash 8-track player. Solid build quality and good sound. Ready for installation.',
      condition: 'Good',
      features: ['Craig Quality', 'Under-Dash Design', 'Good Sound Quality'],
      originalPrice: 280,
      salePrice: 140,
      images: ['/assets/images/players/craig-underdash-1.jpg'],
      inStock: true
    }
  ];

  setActiveCategory(category: string) {
    this.activeCategory = category;
  }

  getFilteredPlayers(): Player[] {
    if (this.activeCategory === 'all') {
      return this.players;
    }
    return this.players.filter(player => player.category === this.activeCategory);
  }

  contactAboutPlayer(player: Player) {
    const subject = `Inquiry about ${player.name}`;
    const body = `Hi Dan & Kathy,\n\nI'm interested in the ${player.name} listed for $${player.salePrice}.\n\nPlease let me know if it's still available and provide shipping costs to my location.\n\nThank you!\n`;
    
    window.location.href = `mailto:sales@katestrackshack.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  viewPlayerDetails(player: Player) {
    // Future implementation - could open a modal or navigate to detail page
    alert(`Player Details:\n\n${player.name}\n\nCondition: ${player.condition}\nPrice: $${player.salePrice}\n\n${player.description}`);
  }

  onImageError(event: any) {
    event.target.src = '/assets/images/placeholder-player.jpg';
  }
}
