import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCat'
})
export class FilterCatPipe implements PipeTransform {

  transform( arr: any = [], param: string ): unknown {

    if ( arr[0] && param ){

      let filter = arr.filter( ell => ell.category.toLowerCase().indexOf(param.toLowerCase()) !== -1  );

      return filter;

    }

    return arr;
  }

}
