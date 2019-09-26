import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;
  inputText :string ="initial value";

  constructor(){

    this.user=new User();
    this.user.name="Sumud"
    this.user.designation="Fll Stack"
    this.user.address="pinch street bangalore 567890"
    this.user.phone=[

'123-456-45678',
'890-987-5678'


    ];
  }
  
}
