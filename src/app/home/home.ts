import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  // Demo Data for Services
  services = [
    {
      title: 'Construction Services',
      description: 'We offer exceptional building solutions and are well-positioned to deliver against a variety of works, designs, and briefs. Whether it\'s new build, refurbishment, or large-scale extensions.',
      icon: '🏗️'
    },
    {
      title: 'Sectors',
      description: 'We have a long-serving history and reputation for delivering high-quality building works across Education, Leisure, and Residential sectors.',
      icon: '👷'
    },
    {
      title: 'Architects',
      description: 'Providing design and build solutions across the region, we have nurtured a strong network of architects to support our full design and build service offering.',
      icon: '📐'
    }
  ];

  // Demo Data for Testimonials
  testimonials = [
    {
      quote: 'I have worked closely with Matt and his team for many years and have always been impressed with the high level of work they do. I would definitely recommend MFP.',
      author: 'Ben Varley'
    },
    {
      quote: 'Exceptional attention to detail and outstanding communication throughout our commercial renovation project. Highly recommended!',
      author: 'Sarah Jenkins'
    },
    {
      quote: 'The electrical and building teams completed our extension on time and within budget. Professional from start to finish.',
      author: 'David Miller'
    }
  ];

  // Carousel Control Logic
  currentIndex = 0;
  private autoSlideInterval: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Auto-advances every 5 seconds
  }

  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.resetAutoSlide();
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.resetAutoSlide();
  }

  private resetAutoSlide(): void {
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}