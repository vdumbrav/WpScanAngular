import { Component, OnInit } from '@angular/core';
import { MdInputModule } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WpvulndbService } from '../../services/wpvulndb.service';
import { version } from './version_value';
@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent implements OnInit {
  versionForm: FormGroup;
  errorMsg: any;
  resp: any;
  latest_version: any;
  popular: any;
  last_updated: any;
  title: any;
  vulnerabilities: any;
  version: any[];
  release_date: any;
  changelog_url: any;

  constructor(private fb: FormBuilder,
    private wpvulndbService: WpvulndbService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.version = version;
  }

  buildForm() {
    this.versionForm = this.fb.group({
      version: ['']
    });
  }

  onVersionubmit() {
    this.wpvulndbService.getVersion(this.versionForm.value.version).subscribe(
      response => {
this.title = Object.keys(response);
        this.changelog_url = response[Object.keys(response)[0]].changelog_url;
        this.release_date = response[Object.keys(response)[0]].release_date;
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
