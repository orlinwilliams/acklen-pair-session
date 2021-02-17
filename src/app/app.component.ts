import { Component,} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'acklen-pair-session';

  data:any = {number1:0, number2:0}
  result: number = 0;

  sum(){
    this.result = this.data.number1 + this.data.number2;
  }
}
