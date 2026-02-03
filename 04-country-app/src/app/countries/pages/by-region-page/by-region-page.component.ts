import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries : Country[] = [];

  constructor(private countriesService: CountriesService) { }

    onSearch(value: string) :void{
    console.log('Search by Region value:', value);
    this.countriesService.searchRegion(value).subscribe(countries => {
      this.countries = countries;
    });
  }

}
