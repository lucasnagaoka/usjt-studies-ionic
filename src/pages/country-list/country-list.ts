import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CountryDetailPage } from '../country-detail/country-detail';
import { Country } from '../../model/country';
import { CountryProvider } from '../../providers/country/country';

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
  providers: [
    CountryProvider
  ]
})
export class CountryListPage {
  public continent: string;
  public countries: Country[];
  public country: Country;

  constructor(public navCtrl: NavController, public navParams: NavParams, private countryProvider: CountryProvider) {
    this.continent = navParams.get("continent");
    this.countryProvider.getCountries(this.continent).subscribe(
      response => {
        this.countries = response;
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountryListPage');
  }

  public showDetails(country: Country) {
    this.navCtrl.push(CountryDetailPage, {country: country});
  }

}
