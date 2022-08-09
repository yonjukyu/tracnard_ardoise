import {Component, Input, OnInit} from '@angular/core';
import {ArdoiseServices} from "../services/ardoise.services";
import {Router} from "@angular/router";
import {Ardoise} from "../models/ardoise-model";

@Component({
  selector: 'app-ardoise',
  templateUrl: './ardoise.component.html',
  styleUrls: ['./ardoise.component.scss']
})
export class ArdoiseComponent implements OnInit {
    @Input() ardoise!: Ardoise;
  constructor(private ardoiseService: ArdoiseServices,
              private router: Router) { }

  ngOnInit(): void {
  }
  OnViewArdoise() {
    this.router.navigateByUrl(`facesnaps/${this.ardoise.id}`);
  }

}
