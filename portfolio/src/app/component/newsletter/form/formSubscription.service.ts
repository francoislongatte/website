import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class formSubcriptionService {
  private http = inject(HttpClient);

  private url = "https://api.brevo.com/v3/contacts";
  private api_key =
    "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";

  addContact(email: string): Observable<unknown> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json",
      "api-key": this.api_key,
    });
    return this.http.post<unknown>(
      this.url,
      JSON.stringify({
        email,
        listIds: [5],
      }),
      { headers }
    );
  }
}
