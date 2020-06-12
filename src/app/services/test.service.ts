import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse,  } from "@angular/common/http";
import { throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  readonly _apiUrl = "http://35.214.106.155:44201/api";
  readonly _debugApiUrl = "https://localhost:44339/api";

  constructor(private http: HttpClient) { }

  postOrder(orderRequest: Product) {
      let headers = this.createRequestHeader();
      try{
        this.http
       .post(`${this._apiUrl}/order`, orderRequest,  { headers: headers })
       .subscribe(
         data => console.log("data", data),
         err => console.log("err", err)
       )
      } 
      catch(ex){
        console.log(ex);
      }
      
       
       // .pipe(
        //   catchError(this.handleError)
        // )
  }

  testSendOrder(product: Product){
    let message = {"Type": "success", "OrganisationId": 1000002, "Location": 1, "Payload": product.Name};
    let headers = this.createRequestHeader();
      try{
        console.log(`${this._apiUrl}/message`);
        return this.http
       .post(`${this._apiUrl}/message`, message,  { headers: headers, responseType: 'text' })
       .pipe(
         
       )
      } 
      catch(ex){
        console.log(ex);
      }
  }

  getUrl = () => {
    return `${this._apiUrl}/order`;
  }

  private createRequestHeader() {
      // set headers here e.g.
      let headers = new HttpHeaders({
          "Content-Type": "application/json",
          ""
       });

      return headers;
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error.status);
    console.error(JSON.stringify(error.message));
    
    return throwError(
      'Something bad happened; please try again later.');
  };
}

// export interface Order {
//   name: string;
// }
