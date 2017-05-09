import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WpvulndbService } from '../../services/wpvulndb.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pluguin-name',
  templateUrl: './pluguin-name.component.html',
  styleUrls: ['./pluguin-name.component.css']
})
export class PluguinNameComponent implements OnInit {
  errorMsg: any;
  resp: any;
  latest_version: any;
  popular: any;
  last_updated: any;
  title: any;
  vulnerabilities: any;
  plugin_name: string;
  constructor(
    private wpvulndbService: WpvulndbService,
    private activatedRoute: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.plugin_name = this.activatedRoute.snapshot.params['name'];
    this.getPluguinName();
  }

  getPluguinName() {
    this.wpvulndbService.getPluguin(this.plugin_name).subscribe(
      response => {
        this.title = Object.keys(response);
        this.latest_version = response[Object.keys(response)[0]].latest_version;
        this.popular = response[Object.keys(response)[0]].popular;
        this.last_updated = response[Object.keys(response)[0]].last_updated;
        this.vulnerabilities = response[Object.keys(response)[0]].vulnerabilities;
        console.log(this.vulnerabilities);
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
