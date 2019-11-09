import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reminder } from './reminder';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RemindersService {

  baseUrl = `${environment.serverUrl}/reminders`;

  constructor(private http: HttpClient) {
  }

  save(reminder: Reminder) {
    return this.http.post(`${this.baseUrl}`, reminder);
  }

  findAll(): Observable<Reminder[]> {
    return this.http.get<Reminder[]>(`${this.baseUrl}`);
  }

  findById(id: number): Observable<Reminder> {
    return this.http.get<Reminder>(`${this.baseUrl}/${id}`);
  }

  deleteById(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
