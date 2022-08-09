import { Component, OnInit } from '@angular/core';
import {Ardoise} from "../models/ardoise-model";
import {ArdoiseServices} from "../services/ardoise.services";

@Component({
  selector: 'app-ardoise-list',
  templateUrl: './ardoise-list.component.html',
  styleUrls: ['./ardoise-list.component.scss']
})
export class ArdoiseListComponent implements OnInit {
  ardoise!: Ardoise[];
  constructor(private ardoiseService: ArdoiseServices) { }

  ngOnInit(): void {
    this.ardoise = this.ardoiseService.getAllArdoises()
  }

}
