import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
 providedIn: 'root'
})
export class WeatherService {
  private URL = 'http://www.mypubspace.com/pubsmobile/gettownpubs.php?rsTown=';

 constructor(private http: HttpClient) { }

 searchWeatherData(cityName: string): Observable<any> {
   return this
            .http
            .get(`${this.URL}${cityName}`)
            .pipe(
              tap(data => console.log(JSON.stringify(data))),
              catchError(this.handleError)
            );
 }

 private handleError(res: HttpErrorResponse) {
  console.error(res);
  return throwError(res.error || 'Server error');
 }
}
