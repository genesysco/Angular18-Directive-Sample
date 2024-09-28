import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlighterDirective } from './highlighter.directive';
import { RainbowerDirective } from './rainbower.directive';
import { CarouselDirective } from './carousel.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,
     HighlighterDirective ,
     RainbowerDirective ,
     CarouselDirective
     ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dirctive';
  img :string = '';
  imgSource : string[] = ["assets/images/1.jpg", 
    "assets/images/2.jpg",
    "assets/images/3.jpg"
    ];

}
