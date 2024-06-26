import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class formSubcriptionService {
  private http = inject(HttpClient);

  addContact(email: string): Observable<unknown> {
    return this.http.post<unknown>("/api/v1/contact", email);
  }
}
