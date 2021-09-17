import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { PersonalData } from './personal-data';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DynamicServiceService {

  constructor(private httpClient: HttpClient) {

  }

  getPersonalInformation(): Observable<PersonalData[]> {
    return this.httpClient.get<PersonalData[]>(`${environment.baseURL}personalData.json`);
  }
}
