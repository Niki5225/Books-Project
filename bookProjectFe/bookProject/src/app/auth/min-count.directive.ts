import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMinCount]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinCountDirective,
      multi: true,
    }
  ]
})
export class MinCountDirective implements Validator {
  @Input() appMinCount: number | undefined; 
  constructor() { }
  
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
      const len = control.value?.length || 0;
      if (!this.appMinCount || len >= this.appMinCount){
        return null;
      }
      return {appMinCount: this.appMinCount};
  }

}
