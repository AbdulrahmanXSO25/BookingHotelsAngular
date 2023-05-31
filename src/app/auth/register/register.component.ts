import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { CountryService } from '../countries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    country: new FormControl('', Validators.required)
  });

  submitted = false;

  constructor(private userService: AuthService, private toast:ToastrService, private countryService: CountryService, private router:Router) {
  }
  ngOnInit(): void {
    this.loadCountries();
  }


  ng

  countries: string[] = [];

  loadCountries() {
    this.countryService.getCountries().subscribe(
      (response) => {
        this.countries = response.map(country => country.name.common);
        console.log(this.countries);
      },
      (error) => {
        console.log('Failed to load countries:', error);
      }
    );
  }

  get f() { return this.registerForm.controls; }

  register() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.userService.register(this.registerForm.value).subscribe(
      () => {
        this.router.navigateByUrl('/');
        this.toast.success('Register Successfully!')
      },
      error => {
        this.toast.error('An error happends in registering!');
        console.log(error);
      }
    );
  }

}
