import {FormControl} from "@angular/forms";


export class AuthValidators{
    static getEmailStarterValidator(){
        return function emailStarterValidator(control: FormControl) {
            if (!control.value.match(/^123/)){
                return {invalidChars:true}
            }
        }
    }
}