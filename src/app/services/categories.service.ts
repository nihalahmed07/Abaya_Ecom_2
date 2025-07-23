import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private baseUrl = 'https://project2.cybercloudapps.com/wp-json/wc/v3/products/categories';
  private consumerKey = 'ck_4b91a17f6b003ce554b04360671caa6d5f415274';
  private consumerSecret = 'cs_dd2efc294f8c305ed286a72c7cd2fa4af5e4dc1b';
  private username = 'Admin'; // replace with your WP username
  private appPassword = 'Xp02 POXx V1ow FtyC fTRf AipM'; // replace with your WP app password

  constructor(private http: HttpClient) {}

  private getAuthParams(): HttpParams {
    return new HttpParams()
      .set('consumer_key', this.consumerKey)
      .set('consumer_secret', this.consumerSecret);
  }

  // ✅ Get all categories
  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl, { params: this.getAuthParams() });
  }

  // ✅ Add a new category
  addCategory(category: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, category, { params: this.getAuthParams() });
  }

  // ✅ Update existing category
  updateCategory(id: number, category: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, category, { params: this.getAuthParams() });
  }

  // ✅ Delete a category
  deleteCategory(id: number): Observable<any> {
  const url = `${this.baseUrl}/${id}?force=true`;
  const auth = btoa(`${this.username}:${this.appPassword}`);

  const headers = {
    'Authorization': `Basic ${auth}`
  };

  return this.http.delete(url, { headers });
}

}




