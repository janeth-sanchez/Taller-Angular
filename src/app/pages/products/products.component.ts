import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { Productos } from '../../models/test';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productos: Productos[] = [
    {
      name: 'Producto 1',
      description: 'Descripicion del Producto 1',
      price: 0.0,
      img: '/images/alex.jpg'
    },
    {
      name: 'Producto 2', 
      description: 'Descripcion del Producto 2',
      price: 0.0, 
      img: '/images/curo.jpg'
    },
    {
      name: 'Producto 3', 
      description: 'Descripcion del Producto 3',
      price: 0.0, 
      img: '/images/becky.jpg'
    }
  ]
}
