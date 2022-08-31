import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css']
})
export class InitialPageComponent implements OnInit {

  logged!: boolean

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.logged = true
    this.router.navigate(['logged',this.logged])
  }

}
