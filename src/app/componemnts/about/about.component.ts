import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title: string = 'About Fidelity Investments';
  description: string = `Fidelity Investments is a leading financial services firm that provides a wide range of investment solutions and services to help individuals and institutions achieve their financial goals. With over 70 years of experience, we are dedicated to offering our clients exceptional service and innovative products.`;

  mission: string = `Our mission is to inspire better futures and facilitate financial success through our comprehensive investment strategies and unwavering commitment to our clients.`;
  
  values: string[] = [
    'Integrity',
    'Customer Focus',
    'Innovation',
    'Collaboration',
    'Diversity & Inclusion'
  ];
}
