import { Component, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {
  @Input() nome: string = '';
  constructor() {console.log(`Construtor ${this.nome}`)}

  ngOnChanges(): void {//sempre que meu component for alterado vai executar oque está no metodo
    console.log('OnChanges');
  }

  ngOnInit(): void {
      this.nome = `Ola, ${this.nome}` //sempre que meu component nascer vai executar oque está no metodo
  }
}
