import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {map, Observable} from "rxjs";
import {Ardoise} from "../models/ardoise-model";

@Component({
  selector: 'app-create-ardoise',
  templateUrl: './create-ardoise.component.html',
  styleUrls: ['./create-ardoise.component.scss']
})
export class CreateArdoiseComponent implements OnInit {
  ardoiseForm!: FormGroup;
  ardoisePreview$!: Observable<Ardoise>
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.ardoiseForm = this.formBuilder.group({
      title: [null],
      description: [null]
    });
    this.ardoisePreview$ = this.ardoiseForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        id : 0,
        })

      )
    );
  }

  onSubmitForm() {
    console.log(this.ardoiseForm.value);
  }


  onContinue(){
    this.router.navigateByUrl('');
  }

}
