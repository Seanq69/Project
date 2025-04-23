import { Component, OnInit } from '@angular/core';
import { IonToolbar, IonHeader, IonCard, IonCardContent,IonContent, IonCardHeader, IonCardSubtitle, IonTitle} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../services/service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-galway',
  templateUrl: './galway.component.html',
  styleUrls: ['./galway.component.scss'],
  imports: [RouterLink, CommonModule,IonContent,IonTitle, IonToolbar, IonHeader, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle],
})
export class GalwayComponent  implements OnInit {
    mySpace:any[] = [];
    constructor(private ss:ServiceService) {}
  
    ngOnInit(): void {
      this.ss.getServiceData().subscribe(
        (data)=>{
          this.mySpace = data.text;
          this.mySpace = data.icon;
          this.mySpace = data.region;
          this.mySpace = data.temp_c;
        }
  
      );
    }
  }
  