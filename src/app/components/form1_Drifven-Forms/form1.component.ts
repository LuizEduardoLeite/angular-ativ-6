import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  nome:string=''
  sobrenome:string=''
  username:string=''
  cpf:string=''
  telefone:string=''
  endereco:string=''
  complemento:string=''
  senha1:number=0
  senha2:number=0
  autenticador = {
   senha1:'',
   senha2:''
  }
  
  validar():void{
    this.snack.open('Voce foi cadastrado','ok')
    console.log(`Nome =  ${this.nome}`)
    console.log(`Sobrenome =  ${this.sobrenome}`)
    console.log(`Username =  ${this.username}`)
    console.log(`CPF =  ${this.cpf}`)
    console.log(`Telefone =  ${this.telefone}`)
    console.log(`Endereço = ${this.endereco}`)
    console.log(`Complemento do usuario ${this.complemento}`)
    console.log(`Senha =  ${this.senha1}`)
    console.log(`Confirmar senha = ${this.senha2}`)

    
  }

 
 




  constructor(private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

}
