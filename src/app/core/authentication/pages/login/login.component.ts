import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import {
  state,
  style,
  transition,
  animate,
  trigger
} from "@angular/animations";
import { Router } from '@angular/router';
// import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: '0'}),
        animate('1000ms ease-in', style({opacity: '1'}))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
	show = false;

  constructor(private fb: FormBuilder, private router: Router) { }
  // constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  showPassword(){
  	if(this.show){
  		this.show = false;
  	}else{
  		this.show = true;
  	}
  }

  // submit(){
  //   if(this.form.valid){
  //     this.authService.login(this.form.value).subscribe(success=>{
  //       if (success) {
  //         this.router.navigate(['/dashboard']);
  //       }
  //     })
  //   }
  // }

}
