import { Component, OnInit } from '@angular/core';
import { Tarefa } from "../../models/Tarefas";

/*
Apresentar a lista de tarefas no browser
com um checkbox marcado se a tarefa foi realizada ou não
*/

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css']
})

export class ListaDeTarefasComponent implements OnInit {

 
  lista:Tarefa[] = []


  constructor() { 
    this.lista.push(new Tarefa("Escovar o cabelo", true));
    this.lista.push(new Tarefa("Escovar os dentes", false));
    this.lista.push(new Tarefa("Escovar o mundo", false));
   }

  ngOnInit(): void {
  }



}
