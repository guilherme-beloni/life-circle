import { Component, DoCheck, AfterContentChecked, OnInit, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit, DoCheck,
 AfterContentChecked, AfterContentInit,
 AfterViewChecked, AfterViewInit, OnDestroy {

  quantidade: number = 0;

  constructor() {}
  ngOnDestroy(): void {
    console.log('GoodBye');
  }

  adicionar () {
    this.quantidade += 1
  }

  decrementar() {
    this.quantidade -= 1
  }
  //Ordem: checked -> content -> view

  ngOnInit(): void {
    console.log('NgOnIniti');
  }
  ngDoCheck(): void {
    console.log('NgDoCheck');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');//apos alguma alteração verifica o conteudo
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');//quando o primeiro copnteudo é iniciado
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');//apes alguma alteração verifica a view
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');//depois da inicialização da view
  }


}
