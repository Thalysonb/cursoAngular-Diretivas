import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  mostraLista: boolean = true;

  mostraEsconde(){
    this.mostraLista = !this.mostraLista;
  }
  constructor() { }

  ngOnInit() {
  }

}
