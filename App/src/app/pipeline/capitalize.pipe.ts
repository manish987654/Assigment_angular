import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'iz_capitalize'
})

export class CapitalizePipe implements PipeTransform {
    transform(text: string): string {
        return text.toUpperCase();
    }
}
