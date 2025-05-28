import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent {

  cliente = {
    nombre: '',
    username: '',
    contrasena: '',
    prefijoTelefono: '',
    telefono: ''
  };

  mensaje = '';
  cargando = false;

  constructor(private http: HttpClient, private router: Router) {}

  registrarCliente(formulario: NgForm) {
    if (!formulario.valid) return;

    this.cargando = true;
    const url = 'http://localhost:8080/api/clientes';

    this.http.post(url, this.cliente).subscribe({
      next: () => {
        this.mensaje = '✅ Cliente registrado correctamente.';
        formulario.resetForm();
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1500);
        this.cargando = false;
      },
      error: (error) => {
        console.error('❌ Error al registrar cliente:', error);
        this.mensaje = '❌ Ocurrió un error al registrar el cliente.';
        this.cargando = false;
      }
    });
  }
  irAlLogin() {
  this.router.navigate(['/login']);
}

  
}
