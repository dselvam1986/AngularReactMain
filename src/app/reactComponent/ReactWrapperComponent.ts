import {
    Component,
    ElementRef,
    Input,
    OnInit
  } from '@angular/core';
  import * as React from 'react';
  import * as ReactDOM from 'react-dom';
  import * as UserButton from "dino-react-user-button"
  
  @Component({
    selector: 'reactWrapperComponent',
    template: `<div  #reactContainer>
    <div>this is react Container</div>
    </div>`,
  })
  export class ReactWrapperComponent implements OnInit {
  
    @Input() component: any;
    @Input() props: any;
      
    constructor(private el: ElementRef) {
    }
  
    ngOnInit(): void {
        const {component, props} = this;

        ReactDOM.render(React.createElement(component, props), this.el.nativeElement.querySelector('#reactContainer'));
    }
  }
  