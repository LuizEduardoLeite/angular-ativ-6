import { MatDialog } from '@angular/material/dialog';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';



@Component({
  selector: 'form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  
  



  dadosform:FormGroup=this.fb.group({
    nome:['',[Validators.required]],
    sobrenome:['',[Validators.required]],
    username:['',[Validators.required]],
    cpf:['',[Validators.required]],
    telefone:['',[Validators.required]],
    endereco:['',[Validators.required]],
    complemento:['',[Validators.required]],
    senha1:[  ,[Validators.required,Validators.minLength(8)]],
    senha2:[  ,[Validators.required,Validators.minLength(8)]],
    
    
    
  
  })
  
  autenticar(a:string, b:string):boolean{
  if(a==b){
    return true
  } else {
    return false
  }
  }
  
 
  //senha2:['',[Validators.required,Validators.minLength(6)]]
  
  
  
  
  
  
  validar(){
    this.dadosform.valid
   
    //this.snack.open('Voce foi cadastrado','ok')
    console.log(`Nome = ${this.dadosform.controls['nome'].value}`)
    console.log(`Sobrenome = ${this.dadosform.controls['sobrenome'].value}`)
    console.log(`Username = ${this.dadosform.controls['username'].value}`)
    console.log(`Cpf = ${this.dadosform.controls['cpf'].value}`)
    console.log(`Telefone = ${this.dadosform.controls['telefone'].value}`)
    console.log(`Endereço = ${this.dadosform.controls['endereco'].value}`)
    console.log(`Complemento = ${this.dadosform.controls['complemento'].value}`)
    console.log(`Senha = ${this.dadosform.controls['senha1'].value}`)
    console.log(`Senha autenticação = ${this.dadosform.controls['senha2'].value}`)
    console.log('Formulario',this.dadosform.valid)

    
    
  }
  constructor(private fb:FormBuilder, public diagref2:MatDialog) { }

  ngOnInit(): void {
  }

  MostrarDialog(){
    let ref = this.diagref2.open(DialogComponent)
    ref.componentInstance.nomev = this.dadosform.controls['nome'].value
    ref.componentInstance.sobrenomev = this.dadosform.controls['sobrenome'].value
    ref.componentInstance.usernamev = this.dadosform.controls['username'].value
    ref.componentInstance.cpfv = this.dadosform.controls['cpf'].value
    ref.componentInstance.telefonev = this.dadosform.controls['telefone'].value
    ref.componentInstance.enderecov = this.dadosform.controls['endereco'].value
    ref.componentInstance.complementov = this.dadosform.controls['complemento'].value
    
  }
}
