import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators,FormBuilder } from "@angular/forms";

import { AuthService } from "./auth.service";
import { User } from "./user.model";
import {AuthValidators} from "./auth.validators";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
    myForm: FormGroup;

    constructor(private authService: AuthService,private fb: FormBuilder) {}

    onSubmit() {
        const user = new User(
            this.myForm.value.email,
            this.myForm.value.password,
            this.myForm.value.firstName,
            this.myForm.value.lastName
        );
        this.authService.signup(user)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = this.fb.group({
            'firstName': ['', Validators.compose([Validators.required])],
            'lastName': ['', Validators.required],
            'email': ['', Validators.compose([
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ])],
            'password': ['', Validators.required]
        });
    }
}