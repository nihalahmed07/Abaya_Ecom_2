/* import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private apiUrl = 'https://project2.cybercloudapps.com/wp-json/wc/v3/orders';
  private consumerKey = 'ck_dd111222ce2c0914e75dc284afff6a080243a2b4';  // 🔑 your WooCommerce CK
  private consumerSecret = 'cs_31cfcfe1e7ac08abafcf197a0d651e32a0758987';  // 🔐 your WooCommerce CS

  constructor(private http: HttpClient) {}

  getOrders(): Observable<any[]> {
    const params = new HttpParams()
      .set('consumer_key', this.consumerKey)
      .set('consumer_secret', this.consumerSecret);

    return this.http.get<any[]>(this.apiUrl, { params });
  }
}
 */



import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  // private apiUrl = '/wp-json/wc/v3/orders';
  // private consumerKey = 'ck_dd111222ce2c0914e75dc284afff6a080243a2b4';  // 🔑 your WooCommerce CK
  // private consumerSecret = 'cs_31cfcfe1e7ac08abafcf197a0d651e32a0758987';  // 🔐 your WooCommerce CS
  private apiUrl = 'https://project2.cybercloudapps.com/wp-json/wc/v3/orders';  // WooCommerce API URL
  private consumerKey = 'ck_4b91a17f6b003ce554b04360671caa6d5f415274';  // WooCommerce Consumer Key
  private consumerSecret = 'cs_dd2efc294f8c305ed286a72c7cd2fa4af5e4dc1b';  // WooCommerce Consumer Secret

  constructor(private http: HttpClient) {}

  // Method to get orders
  getOrders(): Observable<any[]> {
    const params = new HttpParams()
      .set('consumer_key', this.consumerKey)
      .set('consumer_secret', this.consumerSecret);

    return this.http.get<any[]>(this.apiUrl, { params });
  }

  // Method to get a single order by ID
  getOrder(id: string): Observable<any> {
    const params = new HttpParams()
      .set('consumer_key', this.consumerKey)
      .set('consumer_secret', this.consumerSecret);

    return this.http.get<any>(`${this.apiUrl}/${id}`, { params });
  }

  // Method to update order status
  updateOrderStatus(orderId: string, order: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = {
      status: order.status, // Send the new status of the order
    };

    const params = new HttpParams()
      .set('consumer_key', this.consumerKey)
      .set('consumer_secret', this.consumerSecret);

    return this.http.put<any>(`${this.apiUrl}/${orderId}`, body, {
      headers,
      params,
    });
  }

  deleteOrder(orderId: number): Observable<any> {
  const params = new HttpParams()
    .set('consumer_key', this.consumerKey)
    .set('consumer_secret', this.consumerSecret);

  return this.http.delete(`${this.apiUrl}/${orderId}`, { params });
}
updateOrder(orderId: string, updatedData: any): Observable<any> {
  const params = new HttpParams()
    .set('consumer_key', this.consumerKey)
    .set('consumer_secret', this.consumerSecret);

  const headers = new HttpHeaders().set('Content-Type', 'application/json');

  return this.http.put(`${this.apiUrl}/${orderId}`, updatedData, { headers, params });
}

}
