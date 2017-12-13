import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appHeighlightText]'
})
export class HeighlightTextDirective {

  constructor(private el: ElementRef) { 
		el.nativeElement.style.backgroundColor = "gray";
  }

}
