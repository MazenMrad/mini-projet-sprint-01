import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Type } from '../model/type.model';

@Component({
  selector: 'app-update-type',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-type.html',
  styles: ``
})
export class UpdateType implements OnInit {

  @Input()
  type!: Type;

  @Input()
  ajout!: boolean;

  @Output()
  typeUpdated = new EventEmitter<Type>();

  ngOnInit(): void {
    console.log('ngOnInit du composant UpdateType ', this.type);
  }

  saveType() {
    this.typeUpdated.emit(this.type);
  }
}
