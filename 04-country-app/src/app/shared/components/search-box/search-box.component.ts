import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  //Explicacion de la clase Subject: Es una clase que se utiliza para emitir eventos a los suscriptores. Es una especie de "puente" entre el emisor y el receptor de eventos. En este caso, se utiliza para emitir el valor del input cada vez que el usuario escribe algo en el campo de búsqueda. El método onKeyPress se llama cada vez que el usuario presiona una tecla en el campo de búsqueda, y emite el valor actual del input a través del EventEmitter onValue.
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerUnsubscribe?: Subscription;

  @Input() public placeholder: string = '';
  @Output() public onValue = new EventEmitter<string>();
  @Output() public onDebounce = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.debouncerUnsubscribe = this.debouncer
      .pipe(
        debounceTime(1000) // El operador debounceTime se utiliza para retrasar la emisión de eventos hasta que hayan pasado 1000 milisegundos (1 segundo) desde la última emisión. Esto es útil para evitar emitir eventos cada vez que el usuario escribe algo en el campo de búsqueda, y en su lugar, emitir el valor solo después de que el usuario haya dejado de escribir durante un tiempo determinado.
      )
      .subscribe(value => {
        // console.log(value);
        this.onDebounce.emit(value);
      });
  }

  ngOnDestroy(): void {
    // Es importante cancelar la suscripción al Subject cuando el componente se destruye para evitar fugas de memoria. En este caso, se llama al método unsubscribe() del Subject debouncer para cancelar la suscripción.
    this.debouncerUnsubscribe?.unsubscribe();
  }

  onSearch(value: string) {
    this.onValue.emit(value);
  }

  onKeyPress(value: string) {
    this.debouncer.next(value);
  }
}
