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
  theme_check: any;
  plugins: any;
  plugins_result: any[];
  theme_result: any[];
  plugins_result1: any[];
  theme_result1: any[];
  plugins_check: any;
  version: any;
  version_html: any;
  title_html: any;
  title: any;
  name_plugin: any;
  name_theme: any;
  chklist: any;
  hideElement: any;
  hideSpinner: any;
  constructor(private fb: FormBuilder,
    private wpvulndbService: WpvulndbService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.hideElement = true;
    this.hideSpinner = false;
    this.WpForm = this.fb.group({
      WP: ['']
    });
  }
  empty() {
    this.chklist = '';
    this.hideElement = true;
    this.hideSpinner = false;
    this.WpForm.reset();
  }

  onWpSubmit() {
    this.plugins_result1 = new Array();
    this.theme_result1 = new Array();
    localStorage.setItem('url', this.WpForm.value.WP);
    this.hideElement = false;
    const chkurl = {
      url: this.WpForm.value.WP
    };
    this.wpvulndbService.checkURL(chkurl).subscribe(
      response => {
        this.chklist = response;
        setTimeout(() => {
          this.hideSpinner = true;
        }, 3000);
      },
      error => console.log(error)
    );
    this.wpvulndbService.getWP(this.WpForm.value.WP).subscribe(
      response => {
        const doc = new DOMParser().parseFromString(response, 'text/xml');
        const result_titile = doc.evaluate('//title', doc, null, XPathResult.STRING_TYPE, null);
        this.title_html = result_titile.stringValue;
        this.version_html = response.match(/<meta.*name="generator".*content="(.*)".*\/>/)[1];
        // =============================================================================
        const expression_theme = /(https?:\/\/[\w-]+(\.[\w-]+)\/wp-content\/themes\/)(\w*-?\w*-?\w*-?\w*-?)/gi;
        this.themes = response.match(expression_theme);
        this.theme_result = this.themes.map(element => {
          const reg = /(https?:\/\/[\w-]+(\.[\w-]+)\/wp-content\/themes\/)(\w*-?\w*-?\w*-?\w*-?)/;
          const result = element.match(reg);
          return result[3];
        });
        this.themes = new Set(this.theme_result);
        for (const res of Array.from(this.themes)) {
          this.wpvulndbService.getTheme(res).subscribe(
            response2 => {
              this.theme_result1.push(response2);
            },
            error => {
              this.theme_result1.push(error.status);
            });
        }
        // =============================================================================
        const expression_plugin = /(https?:\/\/[\w-]+(\.[\w-]+)\/wp-content\/plugins\/)(\w*-?\w*-?\w*-?\w*-?)/gi;
        this.plugins = response.match(expression_plugin);
        this.plugins_result = this.plugins.map(element => {
          const reg = /(https?:\/\/[\w-]+(\.[\w-]+)\/wp-content\/plugins\/)(\w*-?\w*-?\w*-?\w*-?)/;
          const result = element.match(reg);
          return result[3];
        });
        this.plugins = new Set(this.plugins_result);
        for (const res of Array.from(this.plugins)) {
          this.wpvulndbService.getPluguin(res).subscribe(
            response1 => {
              this.plugins_result1.push(response1);
            },
            error => {
              this.plugins_result1.push(error.status);
            });
        }
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
