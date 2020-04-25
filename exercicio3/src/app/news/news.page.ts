import { Component, OnInit } from '@angular/core';
import { Noticia } from './Noticia';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  public noticia : Noticia;
  public noticias: Noticia[] = [];

  constructor() { 
    this.noticias = [];
    this.noticia = new Noticia();
  }

  incluirNoticia() {
    this.noticias.push(this.noticia);
    this.noticia = new Noticia();
  }

  ngOnInit() {
  }

}
