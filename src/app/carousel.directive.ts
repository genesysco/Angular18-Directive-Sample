import { Directive , TemplateRef , ViewContainerRef , OnInit, Input} from '@angular/core';
import { ICarouselContext } from './carouselInterface';

@Directive({
  selector: '[appCarousel]',
  standalone: true
})
export class CarouselDirective implements OnInit {

  constructor(private templateRef : TemplateRef<ICarouselContext>,
   private viewContainerRef : ViewContainerRef) {}
  context !: ICarouselContext;
  index : number = 0;
  timer:any;
  @Input('appCarouselImages') images: string[] = [];

  @Input('appCarouselAutoplay')
  set autoplay(val:string){
    val == 'No' ? this.clearAutoplay() : this.playAutoplay();
  }

  ngOnInit(){
    this.context = {
      $implicit : this.images[0],
      controller: {
        next : () => this.next(),
        prev : () => this.prev()
      }
    }
    this.viewContainerRef.createEmbeddedView(this.templateRef , this.context);
  }

  public next() {
    this.index++;
    if(this.index >= this.images.length)
    {
      this.index = 0;
    }
    this.context.$implicit = this.images[this.index];
  }
  public prev() {
    this.index--;
    if(this.index < 0){
      this.index = this.images.length - 1;
    }
    this.context.$implicit = this.images[this.index];
  }

  playAutoplay(){
    this.timer = setInterval(() => {
      this.next();
    }, 2000);
  }

  clearAutoplay(){
    clearInterval(this.timer);
  }

}
