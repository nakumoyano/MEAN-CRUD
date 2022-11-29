import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css'],
})
export class CrearProductoComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productoService: ProductoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }

  agregarProducto() {
    const PRODUCTO: Producto = {
      nombre: this.controlProducto.value,
      categoria: this.controlCategoria.value,
      ubicacion: this.controlUbicacion.value,
      precio: this.controlPrecio.value,
    };

    console.log(PRODUCTO);

    this.router.navigate(['']);
  }

  get controlProducto(): FormControl {
    return this.formulario.controls['producto'] as FormControl;
  }

  get controlCategoria(): FormControl {
    return this.formulario.controls['categoria'] as FormControl;
  }

  get controlUbicacion(): FormControl {
    return this.formulario.controls['ubicacion'] as FormControl;
  }

  get controlPrecio(): FormControl {
    return this.formulario.controls['precio'] as FormControl;
  }
}
