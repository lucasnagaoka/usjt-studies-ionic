import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CountryListPage } from '../country-list/country-list';
import { Continent } from '../../model/continent';
import { Country } from '../../model/country';
import { CountryProvider } from '../../providers/country/country';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public continents: Continent[];
  public continent: Continent;
  public countries: Country[];

  constructor(public navCtrl: NavController) {
    let c1 = {name: "Americas"};
    let c2 = {name: "Africa"};
    let c3 = {name: "Asia"};
    let c4 = {name: "Europe"};
    let c5 = {name: "Oceania"};
    this.continents = [c1, c2, c3, c4, c5];
  }

  ionViewDidLoad() {}

  public searchCountry(continent: string) {
    if(typeof continent != 'string') {
      continent = 'All';
    }
    this.navCtrl.push(CountryListPage, { continent: continent });
  }
}
