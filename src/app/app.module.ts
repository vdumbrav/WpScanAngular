import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WpvulndbService } from './services/wpvulndb.service';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavComponent } from './component/nav/nav.component';
import { PluguinComponent } from './component/pluguin/pluguin.component';
import { ThemeComponent } from './component/theme/theme.component';
import { SiteWpComponent } from './component/site-wp/site-wp.component';
import { RouterModule, Routes } from '@angular/router';
import { PluguinNameComponent } from './component/pluguin-name/pluguin-name.component';
import { ThemeNameComponent } from './component/theme-name/theme-name.component';
import { DeletedotsPipe } from './pipes/deletedots.pipe';
import { VersionComponent } from './component/version/version.component';
import { VersionNameComponent } from './component/version-name/version-name.component';
import { RemoveurlPipe } from './pipes/removeurl.pipe';
import { MdProgressSpinnerModule } from '@angular/material';
import { RemoveurlpluginPipe } from './pipes/removeurlplugin.pipe';
import { RemoveurlthemePipe } from './pipes/removeurltheme.pipe';
import { MergepipePipe } from './pipes/mergepipe.pipe';
import { InfoVultypeComponent } from './info-vultype/info-vultype.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'site-scan', component: SiteWpComponent },
  { path: 'plugin', component: PluguinComponent },
  { path: 'plugin/:name', component: PluguinNameComponent },
  { path: 'theme', component: ThemeComponent },
  { path: 'theme/:name', component: ThemeNameComponent },
  { path: 'version', component: VersionComponent },
  { path: 'version/:name', component: VersionNameComponent },
  { path: 'info_vuln-type', component: InfoVultypeComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    PluguinComponent,
    ThemeComponent,
    SiteWpComponent,
    PluguinNameComponent,
    ThemeNameComponent,
    DeletedotsPipe,
    VersionComponent,
    VersionNameComponent,
    RemoveurlPipe,
    RemoveurlpluginPipe,
    RemoveurlthemePipe,
    MergepipePipe,
    InfoVultypeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [WpvulndbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
