import { FormControl, Validators, FormGroup } from '@angular/forms';


import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  
  
  nome:string = ''
  sobrenome:string = ''
  username:string = ''
  CPF!:number
  Telefone!:number
  endereco:string=''
  complemento:string=''
  senha1?:number
  senha2?:number
  autenticador = {
   senha1:'',
   senha2:''
  }
  
  validar():void{
    
    console.log(`Nome =  ${this.nome}`)
    console.log(`Sobrenome =  ${this.sobrenome}`)
    console.log(`Username =  ${this.username}`)
    console.log(`CPF =  ${this.CPF}`)
    console.log(`Telefone =  ${this.Telefone}`)
    console.log(`Endereço = ${this.endereco}`)
    console.log(`Complemento do usuario ${this.complemento}`)
    console.log(`Senha =  ${this.senha1}`)
    console.log(`Confirmar senha = ${this.senha2}`)
    
    
  }

 
 




  constructor(public diagref:MatDialog,) { }

  MostrarDialog(){
    let ref = this.diagref.open(DialogComponent)
    ref.componentInstance.nomev = this.nome
    ref.componentInstance.sobrenomev = this.sobrenome
    ref.componentInstance.usernamev = this.username
    ref.componentInstance.cpfv = this.CPF!
    ref.componentInstance.telefonev = this.Telefone
    ref.componentInstance.enderecov = this.endereco
    ref.componentInstance.complementov = this.complemento
    ref.componentInstance.senhav = this.senha1!
    ref.componentInstance.autenticacaov = this.senha2!
  }
  ngOnInit(): void {
  }

}
