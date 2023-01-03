import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emocao-area',
  templateUrl: './emocao-area.component.html',
  styleUrls: ['./emocao-area.component.css']
})
export class EmocaoAreaComponent implements OnInit {
  value: any;

  selecionarBotao(value: any) {
    console.log(value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
