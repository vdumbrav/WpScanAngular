import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WpvulndbService } from '../../services/wpvulndb.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-theme-name',
  templateUrl: './theme-name.component.html',
  styleUrls: ['./theme-name.component.css']
})
export class ThemeNameComponent implements OnInit {
  errorMsg: any;
  resp: any;
  latest_version: any;
  popular: any;
  last_updated: any;
  title: any;
  vulnerabilities: any;
  theme_name: string;

  constructor(
    private wpvulndbService: WpvulndbService,
    private activatedRoute: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.theme_name = this.activatedRoute.snapshot.params['name'];
    this.getThemenName();
  }

  getThemenName() {
    this.wpvulndbService.getTheme(this.theme_name).subscribe(
      response => {
        this.title = Object.keys(response);
        this.latest_version = response[Object.keys(response)[0]].latest_version;
        this.popular = response[Object.keys(response)[0]].popular;
        this.last_updated = response[Object.keys(response)[0]].last_updated;
        this.vulnerabilities = response[Object.keys(response)[0]].vulnerabilities;
      },
      error => {
        switch (error.status) {
          case 404: {
            this.errorMsg = 'Not found';
            console.log(error.status);
            break;
          }
          default: {
            console.log(error.status);
          }
        }
      });
  }

}
