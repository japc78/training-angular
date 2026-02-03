import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

const GIPHY_API_KEY:string = "LtkGU0ZbRcWCOsCJNT1RceZ9iE6w2Pw6";
const GIPHY_URL: string = "https://api.giphy.com/v1/gifs/search?";
const GIPHY_LIMIT: number = 10;

@Injectable({providedIn: 'root'})
export class GifsService {

  public gifList: Gif[] = [];
  private _tagsHistory: string[] = [];


  constructor(private http: HttpClient) {
    this.loadLocalStorage();
   }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  public searchTag(tag: string): void {
    if (tag.trim().length === 0) return;
    this.organizeHistory(tag);

    const url = GIPHY_URL;

    const params = new HttpParams()
      .set('api_key', GIPHY_API_KEY)
      .set('q', tag)
      .set('limit', GIPHY_LIMIT);

    this.http.get<SearchResponse>(`${url}`, { params })
      .subscribe((response) => {
        this.gifList = response.data;
      });
  }

  private organizeHistory (tag: string) {
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(t => t !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('tagsHistory', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage():void {
    const tagsHistory = localStorage.getItem('tagsHistory');
    if (tagsHistory) {
      this._tagsHistory = JSON.parse(tagsHistory);
      this.searchTag(this._tagsHistory[0]);
    }
  }
}
