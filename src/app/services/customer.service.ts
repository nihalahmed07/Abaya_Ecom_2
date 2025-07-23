import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private siteUrl = 'https://project2.cybercloudapps.com/wp-json/wc/v3/orders';
  private consumerKey = 'ck_4b91a17f6b003ce554b04360671caa6d5f415274';  
  private consumerSecret = 'cs_dd2efc294f8c305ed286a72c7cd2fa4af5e4dc1b'; 

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<any[]> {
    const url = `${this.siteUrl}/wp-json/wc/v3/customers?consumer_key=${this.consumerKey}&consumer_secret=${this.consumerSecret}`;
    return this.http.get<any[]>(url);
  }
}
