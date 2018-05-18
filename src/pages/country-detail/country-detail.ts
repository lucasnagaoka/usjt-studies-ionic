import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Country } from '../../model/country';

/**
 * Generated class for the CountryDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-country-detail',
  templateUrl: 'country-detail.html',
})
export class CountryDetailPage {
  public country: Country = {name: ""};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.country.name = this.navParams.get("countryName");
    console.log(this.country);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountryDetailPage');
  }

}
