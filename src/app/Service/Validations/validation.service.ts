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
      pattern: 'El formato del campo es incorrecto',
      invalidDecimalNumber: 'El número puede tener hasta dos decimales',
      invalidNoDecimalNumber: 'La cantidad tiene que ser un número entero',
      invalidCreditCardNumber: 'Número de tarjeta invalida',
      invalidMonthNumber: 'El número tiene que ser de dos digitos',
      invalidYearNumber: 'El número tiene que ser de dos digitos',
      invalidCVCNumber: 'El número tiene que ser de tres digitos'
    };

    return config[validatorName];
  }

  static decimalValidator(validation){
    
    if(String(validation.value).match(/^[0-9]+(.[0-9]{1,2})?$/g)){
      return null;
    }
    else{
      return { invalidDecimalNumber : true }
    }
  }

  static noDecimalValidator(validation){
    if(String(validation.value).match(/^[0-9]*$/g)){
      return null;
    }
    else{
      return { invalidNoDecimalNumber : true }
    }
  }

  static creditCardNumberValidator(validation){
    if(String(validation.value).match(/^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/g)){
      return null;
    }
    else{
      return { invalidCreditCardNumber : true }
    }
  }

  static monthTwoDigitsValidator(validation){
    if(String(validation.value).match(/^[0-9][0-9]$/g)){
      return null;
    }
    else{
      return { invalidMonthNumber : true }
    }
  }

  static yearTwoDigitsValidator(validation){
    if(String(validation.value).match(/^[0-9][0-9]$/g)){
      return null;
    }
    else{
      return { invalidYearNumber : true }
    }
  }

  static cvcThreeDigitsValidator(validation){
    if(String(validation.value).match(/^[0-9][0-9][0-9]$/g)){
      return null;
    }
    else{
      return { invalidCVCNumber : true }
    }
  }
}
