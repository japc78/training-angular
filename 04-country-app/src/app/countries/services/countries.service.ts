import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, map} from 'rxjs';
import { Country } from '../interfaces/country';

const REST_COUNTRY_API: string = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(private http: HttpClient) { }

  searchCapital(capital: string) : Observable<Country[]> {
    const url = `${REST_COUNTRY_API}/capital/${capital}`;
    return this.searchCountriesByUrl(url);
  }

  searchCountry(country: string) : Observable<Country[]> {
    const url = `${REST_COUNTRY_API}/name/${country}`;
    return this.searchCountriesByUrl(url);
  }

  searchRegion(region: string) : Observable<Country[]> {
    const url = `${REST_COUNTRY_API}/region/${region}`;
    return this.searchCountriesByUrl(url);
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
