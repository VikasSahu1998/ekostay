import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ekostay-villa-blanco',
  templateUrl: './ekostay-villa-blanco.component.html',
  styleUrls: ['./ekostay-villa-blanco.component.css']
})
export class EkostayVillaBlancoComponent implements OnInit {
  BookingForm: FormGroup | any;
  constructor(private fb: FormBuilder) {
    this.BookingForm = this.fb.group({
      // date: ['', Validators.required],
    })
  }
  rating1:number=5;
  rating2:number=4;
  rating3:number=3;
  public ngOnInit() {
    
  }
  onSubmit() {
    if (!this.BookingForm.valid) {
      return;
    }
  }
}
