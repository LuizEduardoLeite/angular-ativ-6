
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  
  nomev:string=''
  sobrenomev:string=''
  usernamev:string=''
  cpfv!:number
  telefonev!:number
  enderecov:string=''
  complementov:string=''
  senhav!:number
  autenticacaov!:number

  constructor() { }

 

  ngOnInit(): void {
  }

}
