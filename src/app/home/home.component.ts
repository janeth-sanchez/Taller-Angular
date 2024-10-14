import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { info } from 'console';
import { CardComponent } from "../components/card/card.component";

@Component({
selector: 'ui-home',
standalone: true,
imports: [CardComponent],
templateUrl: './home.component.html',
styleUrl: './home.component.css'
})
export class HomeComponent {
    title = 'taller';
    VerPerfil(){
        alert("Ver Perfil");
    }
    ConocerMas(){
        alert("Conocer Mas");
    }
    goProducts(){
        window.location.href = "/products" 
    }
} 