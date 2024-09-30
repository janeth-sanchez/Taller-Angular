import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { info } from 'console';

@Component({
  selector: 'ui-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
@Input() image!: string;
@Input() title!: string;
@Input() info!: string;
@Input() text_btn!: string;
@Input() clickevent!:() => void;

onClick() 
{
  this.clickevent();
}
} 