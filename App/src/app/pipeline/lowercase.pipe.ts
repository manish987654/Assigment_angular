import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'iz_lowercase'
})

export class LowerCasePipe implements PipeTransform {
    transform(text: string): string {
        return text.toLowerCase();
    }
}
