import { Pipe, PipeTransform } from '@angular/core';
import { Mascotas } from '../interfaces/interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(mascota: Mascotas): string {
    return `assets/main/${mascota._id}.png`;
  }

}
