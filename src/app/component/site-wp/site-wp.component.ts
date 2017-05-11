import { Component, OnInit, ViewChild } from '@angular/core';
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
  themes: any;
  plugins: any;
  version: any;
  version_html: any;
  title_html: any;
  title: any;
  name_plugin: any;
  name_theme: any;
  chklist: any;
  hideElement: any;
  constructor(private fb: FormBuilder,
    private wpvulndbService: WpvulndbService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.hideElement = true;
    this.WpForm = this.fb.group({
      WP: ['']
    });
  }

  onWpSubmit() {
    this.hideElement = false;
    const chkurl = {
      url: this.WpForm.value.WP
    };
    this.wpvulndbService.checkURL(chkurl).subscribe(
      response => {
        this.chklist = response;
      },
      error => console.log(error)
    );
    this.wpvulndbService.getWP(this.WpForm.value.WP).subscribe(
      response => {
        const doc = new DOMParser().parseFromString(response, 'text/xml');
        const result_titile = doc.evaluate('//title', doc, null, XPathResult.STRING_TYPE, null);
        this.title_html = result_titile.stringValue; // returns 'test'u
        this.version_html = response.match(/<meta.*name="generator".*content="(.*)".*\/>/)[1];
        const expression_theme = /http:\/\/[\w-]+(\.[\w-]+)\/wp-content\/themes\/+([\w.,@?^=%&amp;:\/~+#-]+[\w@?^=%&amp;\/~+#-])?/gi;
        this.themes = response.match(expression_theme);
        const expression_plugin = /http:\/\/[\w-]+(\.[\w-]+)\/wp-content\/plugins\/+([\w.,@?^=%&amp;:\/~+#-]+[\w@?^=%&amp;\/~+#-])?/gi;
        this.plugins = response.match(expression_plugin);
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
