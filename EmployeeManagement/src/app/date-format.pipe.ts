import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe extends DatePipe implements PipeTransform {

  transform(value: any,args?: any): any {
    debugger;
    return super.transform(value, 'dd MMM, yyyy'  );
  }

}
