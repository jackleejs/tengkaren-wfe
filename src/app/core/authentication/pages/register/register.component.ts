import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { MustMatch } from '../../../../shared/helpers/must-match.validator';
import { Router } from '@angular/router';
// import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;
  public show = false;
  public show2 = false;

  constructor(private fb: FormBuilder, private router: Router) { }
  // constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.maxLength(256)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      password_confirmation: [null, Validators.required]
    }, 
    {
      validator: MustMatch('password', 'password_confirmation')
    });
  }

  showPassword(){
    if(this.show){
      this.show = false;
    }else{
      this.show = true;
    }
  }

  showConfirmPassword(){
    if(this.show2){
      this.show2 = false;
    }else{
      this.show2 = true;
    }
  }

  // submit(){
  //   if(this.form.valid){
  //     this.authService.register(this.form.value).subscribe(success=>{
  //       if (success) {
  //         this.router.navigate(['/authentication']);
  //       }
  //     })
  //   }
  // }

}
