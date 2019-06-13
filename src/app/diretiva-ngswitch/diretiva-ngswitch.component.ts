import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngswitch',
  templateUrl: './diretiva-ngswitch.component.html',
  styleUrls: ['./diretiva-ngswitch.component.css']
})
export class DiretivaNgswitchComponent implements OnInit {

  aba: string = 'Ativo';
  // trocaAba(){
  //   console.log(this.aba);
    
  // }
  constructor() { }

  ngOnInit() {
  }

}
