import { Component, OnInit } from '@angular/core';
import { MdInputModule } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WpvulndbService } from '../../services/wpvulndb.service';
import { theme_val } from './theme_value';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
  themeForm: FormGroup;
  versionForm: FormGroup;
  errorMsg: any;
  resp: any;
  latest_version: any;
  popular: any;
  last_updated: any;
  title: any;
  vulnerabilities: any;
  theme_val: any[];

  constructor(private fb: FormBuilder,
    private wpvulndbService: WpvulndbService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.theme_val = theme_val;
  }

  buildForm() {
    this.themeForm = this.fb.group({
      theme: ['']
    });
    this.versionForm = this.fb.group({
      theme_val: ['']
    });
  }

  onThemeSubmit() {
    this.wpvulndbService.getTheme(this.themeForm.value.theme).subscribe(
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

  onVersionubmit() {
    this.wpvulndbService.getTheme(this.versionForm.value.theme_val).subscribe(
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
