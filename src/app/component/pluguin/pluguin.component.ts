import { Component, OnInit } from '@angular/core';
import { MdInputModule } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WpvulndbService } from '../../services/wpvulndb.service';
import { plugin_val } from './plugin_value';

@Component({
  selector: 'app-pluguin',
  templateUrl: './pluguin.component.html',
  styleUrls: ['./pluguin.component.css']
})
export class PluguinComponent implements OnInit {
  pluguinForm: FormGroup;
  versionForm: FormGroup;
  errorMsg: any;
  resp: any;
  latest_version: any;
  popular: any;
  last_updated: any;
  title: any;
  vulnerabilities: any;
  plugin_val: any[];

  constructor(private fb: FormBuilder,
    private wpvulndbService: WpvulndbService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.plugin_val = plugin_val;
  }

  buildForm() {
    this.pluguinForm = this.fb.group({
      pluguin: ['']
    });
    this.versionForm = this.fb.group({
      plugin_val: ['']
    });
  }

  onPluguinSubmit() {
    this.wpvulndbService.getPluguin(this.pluguinForm.value.pluguin).subscribe(
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
    this.wpvulndbService.getPluguin(this.versionForm.value.plugin_val).subscribe(
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
