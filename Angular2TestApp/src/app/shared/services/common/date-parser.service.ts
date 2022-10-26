import { Injectable } from '@angular/core';
import { DatePipe } from "@angular/common";
@Injectable({
  providedIn: "root",
})
export class DateParserService {
  public dateFormat = "dd/MM/yyyy";
  constructor(
    private readonly _datepipe: DatePipe
  ) { }

}