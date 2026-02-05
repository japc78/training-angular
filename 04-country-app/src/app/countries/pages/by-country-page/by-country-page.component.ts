import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  public countries : Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private countriesService: CountriesService) { }
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStorage.byCountries.countries;
    this.initialValue = this.countriesService.cacheStorage.byCountries.term;
  }

  onSearch(value: string) :void{
    console.log('Search by Country value:', value);
    this.countriesService.searchCountry(value).subscribe(countries => {
      this.countries = countries;
    });
  }
}
