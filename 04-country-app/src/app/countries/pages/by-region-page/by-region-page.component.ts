import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {

  public countries : Country[] = [];
  public regions : Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public isLoading: boolean = false;
  public initialValue?: Region;

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStorage.byRegion.countries;
    this.initialValue = this.countriesService.cacheStorage.byRegion.region;
  }

  onSearch(value: Region) :void{
    // console.log('Search by Region value:', value);
    this.isLoading = true;
    this.countriesService.searchRegion(value).subscribe(countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }

  onRegionChange($event: Event) {
    const region = ($event.target as HTMLInputElement).value as Region;
    this.onSearch(region);
  }
}
