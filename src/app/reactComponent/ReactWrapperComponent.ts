import {
    Component,
    ElementRef,
    Input,
    OnInit
  } from '@angular/core';
  import * as React from 'react';
  import {createRoot} from 'react-dom/client';
  import * as UserButton from "dino-react-user-button"
  
  @Component({
    selector: 'reactWrapperComponent',
    template: `<div  #reactContainer></div>`,
  })
  export class ReactWrapperComponent implements OnInit {
  
    @Input() component: any;
    @Input() props: any;

    rootComp: any;
      
    constructor(private el: ElementRef) {
    }
  
    ngOnInit(): void {
      this.rootComp = createRoot(this.el.nativeElement.querySelector('#reactContainer'));

      this.rootComp.render(this.component);
      
      // render(React.createElement(this.component), this.el.nativeElement.querySelector('#reactContainer'));
    }
  }
  