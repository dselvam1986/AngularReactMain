import { Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit, inject } from '@angular/core';
import { ComponentProps, createElement, ElementType } from "react";
import {createRoot} from 'react-dom/client'

@Directive({
  selector: '[appReactDIrective]'
})
export class ReactDIrectiveDirective implements OnInit ,OnChanges, OnDestroy{

  @Input() reactComponent: any;
  @Input() props:  any;
    
  private root = createRoot(inject(ElementRef).nativeElement);
  constructor() { }

  ngOnInit(): void {
      
  }

  ngOnChanges(){
        this.root.render(createElement(this.reactComponent, this.props))
    }

    ngOnDestroy(): void {
        this.root.unmount()
    }

}
