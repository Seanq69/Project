import { Component } from '@angular/core';
import { IonToolbar, IonHeader, IonTitle, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton, IonContent,} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, // For routerLink
    IonHeader,
    IonToolbar,
    IonTitle,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonContent,
  ],
})
export class HomePage {

 
}


  
