import { Component } from '@angular/core';
import { Roles, Usuario } from '../../../models/test';
import { CardComponent } from "../../../components/card/card.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

  usuarios:Usuario[]=[
    {
      id: 1,
      name: "Cris Martinez",
      description: "Cliente",
      rol: {
        rol: "Cliente"
      },
      img: '',
      price: '',
    },
    {
      id: 2,
      name: "Michelle",
      description:"Admin",
      rol: {
        rol: "Admin",
      },
      img: '',
      price: '',
    }, 
    {
      id: 3,
      name: "Mario Ortega",
      description: "Vendedor",
      rol: {
        rol: "Vendedor"
      },
      img: '',
      price: '',
    }
  ]; 
}
