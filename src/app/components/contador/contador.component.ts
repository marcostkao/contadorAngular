import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  public n: number = 0;

  constructor() { }

  aumenta(){
    this.n++;
  }

  diminui(){
    this.n--;
    if( this.n <= 0){
      alert("Digite um número maior que Zero");
      return;
    }
  }


  ngOnInit(): void {
  }

}
