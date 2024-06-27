import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {




  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: new FormControl('Formulário Reativo'),
      autoria: new FormControl('Angular'),
      modelo: new FormControl('modelo1')
    })
  }

  //Formulário:
  formulario!: FormGroup;

  criarPensamento(){
    //Injeta o valor do formulário no momento em que o cria
    this.service.criar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    }

  )
  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

}
