import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  url:string='api/categories'


  getAll():Observable<Category[]>
  {
    return this.http.get<Category[]>(this.url)
  }

  getById(id:number):Observable<Category>
  {
    return this.http.get<Category>(`${this.url}/${id}`)
  }

  create(category:Category):Observable<Category>
  {
    return this.http.post<Category>(this.url, category)
  }

  update(category:Category) : Observable<Category>
  {
    return this.http.put<Category>(this.url, category)
  }

  delete(id:number) : Observable<any>
  {
    return this.http.delete(`${this.url}/${id}`)
  }


}
