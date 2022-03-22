import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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
    senha1:['',[Validators.required,Validators.minLength(6)]],
    senha2:['',[Validators.required,Validators.minLength(6),Validators.]],
    
    
    
  })
  
  autenticar()  {
    
    let senha1 = ['']
    let senha2 = ['']
    if(senha1!=senha2){
      return alert('senha diferente')
    }

   }
  
  
  
  
  
  
  
  
  validar():void{
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

    
  }
  constructor(private snack:MatSnackBar, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
