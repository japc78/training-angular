import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {


  public countries : Country[] = [];
  public regions : Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  constructor(private countriesService: CountriesService) { }

  onSearch(value: Region) :void{
    console.log('Search by Region value:', value);
    this.countriesService.searchRegion(value).subscribe(countries => {
      this.countries = countries;
    });
  }

  onRegionChange($event: Event) {
    const region = ($event.target as HTMLInputElement).value as Region;
    this.onSearch(region);
  }
}
