import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      required: 'El campo es requerido',
      min: 'El valor no puede ser negativo',
      max: `El valor no puede ser mayor que ${validatorValue.max}`,
      maxlength: `Largo maximo no puede ser mayor que ${validatorValue.requiredLength}`,
      pattern: 'Pattern incorrect',
      invalidDecimalNumber: 'Invalid number format',
      invalidNoDecimalNumber: 'Invalid number format',
      validCreditCardNumber: 'Invalid credit card number'
    };

    return config[validatorName];
  }

  static decimalValidator(validation){
    
    if(String(validation.value).match(
      /[0-9]+([\.,][0-9][0-9])?/
    )){
      console.log("Dentro del if: ",validation.value);
      return null;
    }
    else{
      console.log("Dentro del else: ",validation.value);
      return { invalidDecimalNumber : true }
    }
  }

  static noDecimalValidator(validation){
    if(String(validation.value).match(
      /[0-9]+/
    )){
      console.log("Dentro del if: ",validation.toString());
      return null;
    }
    else{
      console.log("Dentro del else: ",validation.value);
      return { invalidNoDecimalNumber : true }
    }
  }

  static validCreditCardNumber(){
    console.log("Enter credit card validator");
    return null;
  }
}
