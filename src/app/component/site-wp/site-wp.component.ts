import { Component, OnInit } from '@angular/core';
import { MdInputModule } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WpvulndbService } from '../../services/wpvulndb.service';

@Component({
  selector: 'app-site-wp',
  templateUrl: './site-wp.component.html',
  styleUrls: ['./site-wp.component.css']
})
export class SiteWpComponent implements OnInit {
  WpForm: FormGroup;
  errorMsg: any;
  resp: any;
  version: any;
  title: any;
  name_plugin: any;
  name_theme: any;

  constructor(private fb: FormBuilder,
    private wpvulndbService: WpvulndbService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.version = '4.3.3';
    this.title = 'AOPA';
    this.name_plugin = 'eshop';
    this.name_theme = 'pagelines';
  }

  buildForm() {
    this.WpForm = this.fb.group({
      WP: ['']
    });
  }

  onWpSubmit() {
    this.wpvulndbService.getWP(this.WpForm.value.WP).subscribe(
      response => {
        this.resp = response;
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
