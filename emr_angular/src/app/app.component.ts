import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'emr_angular';

  // ========= REMOVE ===========
  logged!: string | null

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log("recebi", this.route.snapshot.paramMap)
    console.log("nome", this.route.snapshot.paramMap.get("info"));
    this.logged = this.route.snapshot.paramMap.get("info")
  }

  isLogged() {
    // console.log(this.route.snapshot.paramMap);
    let returnStatus:boolean

    if(this.logged === 'true') {
      returnStatus = true
    } else {
      returnStatus = false
    }

    return true
  }
}


