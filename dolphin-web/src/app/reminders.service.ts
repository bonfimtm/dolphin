import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reminder } from './reminder';

@Injectable({
  providedIn: 'root'
})
export class RemindersService {

  baseUrl = 'http://localhost:8080/reminders';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Reminder[]> {
    return this.http.get<Reminder[]>(`${this.baseUrl}`);
  }

  findById(id: number): Observable<Reminder> {
    return this.http.get<Reminder>(`${this.baseUrl}/${id}`);
  }
}
