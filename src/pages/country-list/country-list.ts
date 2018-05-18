import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CountryDetailPage } from '../country-detail/country-detail';
import { Country } from '../../model/country';

/**
 * Generated class for the CountryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-country-list',
  templateUrl: 'country-list.html',
})
export class CountryListPage {
  public countries: Country[];
  public country: Country;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.country = {name: "Brazil"};
    this.countries = [this.country, this.country, this.country]
    console.log(this.countries);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountryListPage');
  }

  public showDetails(name: string) {
    console.log(`País: ${name}`)
    this.navCtrl.push(CountryDetailPage, {countryName: name});
  }

}
