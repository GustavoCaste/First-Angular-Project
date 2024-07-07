import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from './minusculoValidator';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

pensamento: Pensamento = {
id: '',
conteudo: '',
autoria: '',
modelo: ''
}

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(id!).subscribe((pensamento)=>{
    this.pensamento = pensamento

    this.formulario = this.formBuilder.group({
      conteudo: [this.pensamento.conteudo , Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
        Validators.minLength(3)
      ])],
      autoria: [this.pensamento.autoria, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        minusculoValidator
      ])],
      modelo: ['modelo1']
    })
    })



  }
  formulario!: FormGroup;


  criarFormulario(){
    this.formulario = this.formBuilder.group({
      conteudo: [this.pensamento.conteudo , Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
        Validators.minLength(3)
      ])],
      autoria: [this.pensamento.autoria, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        minusculoValidator
      ])],
      modelo: ['modelo1']
    })
  }

  editarPensamento(){
    console.log(this.formulario.get('autoria')?.errors)
    if(this.formulario.valid){
    this.service.editar(this.pensamento).subscribe(()=>{
      this.router.navigate(['/listarPensamento'])


    })
  }
  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])

  }
  habilitarBotao(): string {
    if(this.formulario.valid){
      return 'botao'
    }else{
      return 'botao__desabilitado'
    }

  }
}
