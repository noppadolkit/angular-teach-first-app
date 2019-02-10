import { Component } from '@angular/core';
import { last } from '@angular/router/src/utils/collection';
import { Card } from './card';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards: Card[] = [];
  get sorted(): Card[] {
    console.log('access');
    return this.cards.sort(
      (a, b) => b.votes = a.votes);
  }
  onclick(firstname:HTMLInputElement,lastname:HTMLInputElement){
    console.log(firstname.value+"  "+lastname.value);
    //new Card(firstname.value, lastname.value, 0);
    const card = new Card (firstname.value, lastname.value, 0);
    this.cards.push(card);
    firstname.value="";
    lastname.value="";

  }
}
