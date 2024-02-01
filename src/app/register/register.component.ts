import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryPlace, localidades, provincias } from '../utils/spain';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  selectedProvincia: string | undefined = undefined;
  selectedLocalidad: CountryPlace | undefined = undefined;
  provincias: CountryPlace[] = provincias;
  localidades: CountryPlace[] = localidades;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  selectProvincia() {}

  getLocalidadByParent(): CountryPlace[] {
    if (!this.selectedProvincia) {
      return [];
    }
    const provinciaCode: string | undefined = provincias.find(
      (provincia) => provincia.label === this.selectedProvincia
    )?.code;
    const localidadesByProvincia = localidades.filter((localidad) => {
      return localidad.parent_code === provinciaCode;
    });
    return localidadesByProvincia;
  }
}
