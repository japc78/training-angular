import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent implements OnInit {

  @Input() src!: string;
  @Input() alt: string = '';

  public hasLoaded: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (!this.src) {
      throw new Error('src is required');
    }
  }

  onLoad() {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 500);
  }

}
