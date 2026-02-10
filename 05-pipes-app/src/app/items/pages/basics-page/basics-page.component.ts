import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent implements OnInit {

  public nameLower: string = 'juan antonio';
  public nameUpper: string = 'JUAN ANTONIO';
  public fullName: string = 'juAn aNtonio pAvOn';

  public customDate: Date = new Date();


  constructor() { }

  ngOnInit(): void {
  }

}
