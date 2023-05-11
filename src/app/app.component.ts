import { Component, OnInit } from '@angular/core';
import {createElement} from 'react';
import { render } from 'react-dom';
import * as UserButton from "dino-react-user-button"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  reactBtn = UserButton;

  reactBtnProps = {};

  ngOnInit(): void {
    // this.userElementBtn = createElement('button', {}, 'Click Me!');
    // render(this.userElementBtn, document.getElementById('reactBtn'));

  }

  
}
