import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CountryListPage } from '../country-list/country-list';
import { Continent } from '../../model/continent';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public continents: Continent[];


  constructor(public navCtrl: NavController) {
    let c1 = {name: "Americas"};
    let c2 = {name: "Africa"};
    let c3 = {name: "Asia"};
    let c4 = {name: "Europe"};
    let c5 = {name: "Oceania"};
    this.continents = [c1, c2, c3, c4, c5];
  }

  public searchCountry() {
    this.navCtrl.push(CountryListPage);
  }
}
