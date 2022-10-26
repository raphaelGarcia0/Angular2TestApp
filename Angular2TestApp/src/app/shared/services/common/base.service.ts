import { HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { ErrorResponseMessage } from "../../models/common/response.model";

@Injectable({
  providedIn: "root",
})
export class BaseService {
  protected httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    }),
  };

  public handleError(httpErrorResponse: HttpErrorResponse): Observable<any> {
    if (httpErrorResponse instanceof ErrorEvent) {
      return throwError(httpErrorResponse);
    } else {
      var responseMessage = httpErrorResponse.error as ErrorResponseMessage;
      responseMessage.httpStatusCode = httpErrorResponse.status;
      return throwError(responseMessage);
    }
  }
}
