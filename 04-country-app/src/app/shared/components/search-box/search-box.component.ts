import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent  {

  @Input() public placeholder: string = '';
  @Output() public onValue = new EventEmitter<string>();

  constructor() { }

  onSearch(value: string) {
    this.onValue.emit(value);
  }
}
