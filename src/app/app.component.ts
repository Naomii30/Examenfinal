import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title="examenFinal"
  cantidad=1;
  total: number=0;

  constructor() { }
  ngOnInit(): void {
  }

  calcular(operacion:string)
  {
    switch(operacion){
      case 'a':
        this.total=30*this.cantidad;
      break;
      case 'b':
        this.total=40*this.cantidad;
      break;
      case 'c':
        this.total=50*this.cantidad;
      break;
      default:
      break;
    }
  }


}
    