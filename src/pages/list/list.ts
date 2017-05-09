import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Lista } from '../lista/lista';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['3 a 4', '5 a 6', '7 a 9', 'PRE JUVENILES'];

    this.items = [];
    for (let i = 0; i < this.icons.length; i++) {
      this.items.push({
        title: 'Curso de ' + this.icons[i]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Lista);
  }
}
