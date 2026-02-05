import { Region } from './../interfaces/region.type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, map, tap} from 'rxjs';
import { Country } from '../interfaces/country';

import { CacheStorage } from '../interfaces/cache-store.interface';

const REST_COUNTRY_API: string = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(private http: HttpClient) { }

  public cacheStorage: CacheStorage = {
    byCapital:    { term: '', countries: [] as Country[] },
    byCountries:  { term: '', countries: [] as Country[] },
    byRegion:     { region: '', countries: [] as Country[] }
  };

  searchCapital(capital: string) : Observable<Country[]> {
    const url = `${REST_COUNTRY_API}/capital/${capital}`;
    return this.searchCountriesByUrl(url)
      .pipe(
        // Guardamos en el cacheStorage el resultado de la búsqueda por capital
        tap( countries => this.cacheStorage.byCapital = { term: capital, countries })
      );
  }

  searchCountry(country: string) : Observable<Country[]> {
    const url = `${REST_COUNTRY_API}/name/${country}`;
    return this.searchCountriesByUrl(url)
      .pipe(
        // Guardamos en el cacheStorage el resultado de la búsqueda por país
        tap( countries => this.cacheStorage.byCountries = { term: country, countries })
      );
  }

  searchRegion(region: Region) : Observable<Country[]> {
    const url = `${REST_COUNTRY_API}/region/${region}`;
    return this.searchCountriesByUrl(url)
      .pipe(
        // Guardamos en el cacheStorage el resultado de la búsqueda por región
        tap( countries => this.cacheStorage.byRegion = { region, countries })
      );
  }

  searchCountryByAlphaCode(alphaCode: string) : Observable<Country | null> {
    const url = `${REST_COUNTRY_API}/alpha/${alphaCode}`;

    return this.http.get<Country[]>(url)
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null),
        catchError(error =>  {
          console.log(error);
          return of(null);
        })
      );

  }

  // Private method

  private searchCountriesByUrl(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error => {
          console.log(error);
          return of([]);
        })
      );
  }

}
