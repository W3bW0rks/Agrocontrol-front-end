import {Component, inject, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {User} from "../../models/user.entity";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login-form',
  standalone: true,
    imports: [
        FormsModule,
        MatFormField,
        MatInput,
        MatLabel
    ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  user!: User;
  @ViewChild('userForm', { static: false }) userForm!: NgForm;
  userService: UserService = inject(UserService);

  constructor() {
    this.user = new User({});
  }

  private resetForm() {
    this.userForm.resetForm();
    this.user = new User({});
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.userService.getAll().subscribe(
        (response: User[]) => {
          const foundUser = response.find((user: User) =>
            user.username === this.userForm.value.username &&
            user.password === this.userForm.value.password
          );

          if (foundUser) {
            console.log('User logged in:', foundUser);
            localStorage.setItem('user', JSON.stringify(foundUser)); // Guardar el usuario encontrado
            // Redirigir a otra página o ejecutar alguna acción después del inicio de sesión
            this.resetForm();
          } else {
            console.log('Invalid username or password');
          }
        },
        (error) => {
          console.error('Error fetching users:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

}
