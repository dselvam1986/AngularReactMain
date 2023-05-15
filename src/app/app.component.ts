import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import UserButton from "dino-react-user-button"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  reactBtn = UserButton;

  userElementBtn: any;

  constructor(private el: ElementRef){}
  ngOnInit(): void {
    // this.userElementBtn = createElement(UserButton);
    // render(this.userElementBtn, document.getElementById('reactBtn'));
  }

  @HostListener('window:reactBtnClick', ['$event'])
  captureEvent(event:any) {
    console.log('Angular app captures react event', event)
  }

  
}
