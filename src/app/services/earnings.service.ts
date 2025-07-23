import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EarningsService {
  private siteUrl = 'https://project2.cybercloudapps.com/wp-json/wc-analytics';
  private consumerKey = 'ck_4b91a17f6b003ce554b04360671caa6d5f415274';
  private consumerSecret = 'cs_dd2efc294f8c305ed286a72c7cd2fa4af5e4dc1b';

  constructor(private http: HttpClient) {}

  getDailyStats() {
    const url = `${this.siteUrl}/reports/orders/stats?interval=day&per_page=30&consumer_key=${this.consumerKey}&consumer_secret=${this.consumerSecret}`;
    return this.http.get<any>(url);
  }

  getOrders() {
    const url = `${this.siteUrl.replace('/wc-analytics', '/wc/v3')}/orders?consumer_key=${this.consumerKey}&consumer_secret=${this.consumerSecret}&per_page=100`;
    return this.http.get<any[]>(url);
  }
}
