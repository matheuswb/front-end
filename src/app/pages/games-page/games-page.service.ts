import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesPageService {

  gamesUrl = 'http://localhost:5000/api/games';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.gamesUrl}`);
  }


}
