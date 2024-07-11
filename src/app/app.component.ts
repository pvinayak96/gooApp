import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private appService : AppService){

  }

  title = 'gooApp';
  interest !: string;
  budgetType !: string;
  tripType !: string;
  place !: string;

  output !: string;

  loader : boolean = false; 

  callGemini(){
    this.loader = true;
    this.appService.getAI("place: "+this.place + " , " + "trip type: "+this.tripType + " , "+ "budget type: " + this.budgetType + " , "+ "interest: "+ this.interest  ).subscribe(
      res => {this.output = res.toString().replaceAll("**",'<b>'); this.loader=false}
    )
  }
}
