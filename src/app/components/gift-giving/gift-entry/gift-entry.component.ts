import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GiftListItemCreate } from 'src/app/models';

@Component({
  selector: 'app-gift-entry',
  templateUrl: './gift-entry.component.html',
  styleUrls: ['./gift-entry.component.css']
})
export class GiftEntryComponent {

  @Output()
  giftAdded = new EventEmitter<GiftListItemCreate>();

  form = this.formBuilder.group({
    description: ['', [Validators.required]],
    for: ['', [Validators.required]],
    due: ['', [Validators.required]]
  });


  get description() { return this.form.get('description'); }
  get for() { return this.form.get('for'); }
  get due() { return this.form.get('due'); }

  constructor(private formBuilder: FormBuilder) { }


  submit(foci: HTMLInputElement) {
    if (this.form.valid) {
      this.giftAdded.emit(this.form.value);
      this.form.reset();
      foci.focus();
    } else {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control?.markAsTouched({ onlySelf: true });
      })
      console.log('Fix your form first, yo.');
    }
  }

}
