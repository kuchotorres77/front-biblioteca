import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gasto } from '../model/gasto';

@Injectable({
  providedIn: 'root'
})
export class GastoService {
  // URL = "http://localhost:8080/api/"
  URL = "https://api-biblioteca-production.up.railway.app/api/"
  constructor(private httpClient: HttpClient) { }
  //create
  public save(gasto: Gasto):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'gasto/crear', gasto)
  }
  //read
  public list():Observable<Gasto[]>{
    return this.httpClient.get<Gasto[]>(this.URL + 'gasto/vertodos');
  }
  public detail(id:number):Observable<Gasto>{
    return this.httpClient.get<Gasto>(this.URL + `gasto/ver/${id}`);
  }

  //delete
  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `gasto/borrar/${id}`);
  }
  //update
  public update(id:number, gasto:Gasto):Observable<any>{
    return this.httpClient.put<any>(this.URL + `gasto/editar/${id}`, gasto);
  }
}
