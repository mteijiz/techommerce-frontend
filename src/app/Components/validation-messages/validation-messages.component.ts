import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from 'src/app/Service/Validations/validation.service';

@Component({
  selector: 'app-validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.css']
})
export class ValidationMessagesComponent implements OnInit {

  @Input() validation: FormControl;
  constructor() { }

  get errorMessage() {
    for (let propertyName in this.validation.errors) {
      if (this.validation.errors.hasOwnProperty(propertyName) && this.validation.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.validation.errors[propertyName]);
      }
    }
    return null;
  }

  ngOnInit() {
  }

}
