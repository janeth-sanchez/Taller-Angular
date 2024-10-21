import { Component, Input, signal } from '@angular/core';
import { Productos, Usuario } from '../../models/test';
import { text } from 'stream/consumers';
import { Text } from '@angular/compiler';

type Data={
  data: Productos | Usuario

};
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  text=signal('');
  @Input() data!:Data| Usuario;
  @Input() clickevent!:() => void;
  @Input() productos: any; 
img: any;
name: any;
description: any;

  
  onChange(event:any){
    const inputValue = (event.target as HTMLInputElement).value;
    this.text.set(inputValue);
    if ('description' in this.data) {
      (this.data as Usuario).description = this.text();
    }
  }
  onClick() 
  {
    console.log(this.data) 
  }
}
