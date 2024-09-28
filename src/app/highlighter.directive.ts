import { Directive , HostListener , Renderer2 , ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlighter]',
  standalone: true
})
export class HighlighterDirective{
  constructor(private renderer : Renderer2, private elementRef : ElementRef) {}

  @HostListener('mouseenter') mouseEntered(){
    this.changeBackground('yellow');
  }

  @HostListener('mouseleave') mouseLeft(){
    this.changeBackground('transparent');
  }

  @HostListener('click') Clicked(){
    this.changeBackground('red');
  }
  changeBackground(color:string){
    this.renderer.setStyle(this.elementRef.nativeElement , 'background-color' , color);
  }
}