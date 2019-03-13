import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .list-group-item:first-child {
        border-top-left-radius: 0;
        border-top-right-radous: 0;
        border-top: 0;
      }
    `
  ]
})
export class AppComponent implements OnInit {
  query: string;
  artists: object;
  currentArtist: object;

  showArtist(item) {
    this.query = item.name;
    item.highlight = !item.highlight;
    this.currentArtist = item;
  }

  constructor(private http: HttpClient) {
    this.query = '';
  }

  ngOnInit(): void {
    this.http.get<Object>('http://35.198.82.252/daniels').subscribe(
      data => {
        this.artists = data;
      })
  }
}
