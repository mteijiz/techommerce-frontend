import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      required: 'The field is required',
      min: 'The value cannot be negative',
      minLength: 'Example text'
    };

    return config[validatorName];
  }
}
