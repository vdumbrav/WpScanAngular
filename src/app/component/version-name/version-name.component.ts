import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WpvulndbService } from '../../services/wpvulndb.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-version-name',
  templateUrl: './version-name.component.html',
  styleUrls: ['./version-name.component.css']
})
export class VersionNameComponent implements OnInit {
  errorMsg: any;
  resp: any;
  release_date: any;
  changelog_url: any;
  title: any;
  vulnerabilities: any;
  version_name: string;

  constructor(
    private wpvulndbService: WpvulndbService,
    private activatedRoute: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.version_name = this.activatedRoute.snapshot.params['name'];
    this.getVersionName();
  }

  getVersionName() {
    this.wpvulndbService.getVersion(this.version_name).subscribe(
      response => {
        this.title = Object.keys(response);
        this.changelog_url = response[Object.keys(response)[0]].changelog_url;
        this.release_date = response[Object.keys(response)[0]].release_date;
        this.vulnerabilities = response[Object.keys(response)[0]].vulnerabilities;
        console.log(response);
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
