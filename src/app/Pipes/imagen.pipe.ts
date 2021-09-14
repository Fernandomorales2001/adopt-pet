import { Pipe, PipeTransform } from '@angular/core';
import { Mascotas } from '../Main/interfaces/interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(mascotas: Mascotas): string {
    console.log(JSON.stringify(mascotas));
    return `assets/img/${ mascotas._id }.jpg`;
  }

}
