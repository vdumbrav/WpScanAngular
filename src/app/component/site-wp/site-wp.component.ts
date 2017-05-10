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
  themes: any;
  plugins: any;
  version: any;
  version_html: any;
  title_html: any;
  title: any;
  name_plugin: any;
  name_theme: any;

  constructor(private fb: FormBuilder,
    private wpvulndbService: WpvulndbService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.WpForm = this.fb.group({
      WP: ['']
    });
  }

  onWpSubmit() {
    this.wpvulndbService.getWP(this.WpForm.value.WP).subscribe(
      response => {
        this.title_html = response.match(/<title[^>]*>([^<]+)<\/title>/)[1];
        this.version_html = response.match(/<meta.*name="generator".*content="(.*)".*\/>/)[1];
        console.log(this.version_html);
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
