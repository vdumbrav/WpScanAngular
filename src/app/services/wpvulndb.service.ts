
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WpvulndbService {
  private _url = 'https://wpvulndb.com/api/v2';

  constructor(private _http: Http) { }

  getPluguin(pluguin_name) {
    return this._http.get(`${this._url}/plugins/${pluguin_name}`)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }

  getTheme(theme_name) {
    return this._http.get(`${this._url}/themes/${theme_name}`)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }

  getVersion(version_name) {
    return this._http.get(`${this._url}/wordpresses/${version_name}`)
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }

  getWP(wp_url) {
    return this._http.get(`${wp_url}/wp-includes/`)
      .map((response: Response) => response.text())
      .catch(this._errorHandler);
  }
  // ================================ERROR HANDLER=============================================
  private _errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server Error');
  }
}
