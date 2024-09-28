import { Directive , HostListener , HostBinding } from '@angular/core';

@Directive({
  selector: '[appRainbower]',
  standalone: true
})
export class RainbowerDirective{

  constructor() {}
  rainbowColors = ['#BD0000', '#F64343', '#EC0B0B', '#9A0000', '#6F0000', '#BD7B00', '#F6B743', '#EC9D0B', '#9A6400',
                     '#6F4800', '#0C347E', '#385EA4', '#16469D', '#072966', '#031C4A', '#009700', '#36C536', '#09BD09',
                     '#007B00', '#005900'];

  @HostBinding('style.color') color !:string;
  @HostBinding('style.border-color') border !:string;
  @HostListener('keydown') changeColor(){
    let randomColor = Math.floor(Math.random() * this.rainbowColors.length);
    this.color = this.border = this.rainbowColors[randomColor];
  }

}
