import { Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit, inject } from '@angular/core';
import React from 'react';
import { ComponentProps, createElement, ElementType } from "react";
import {createRoot} from 'react-dom/client'

@Directive({
  selector: '[reactWrap]'
})

export class ReactWrapDirective implements OnInit ,OnChanges, OnDestroy{
  @Input() reactComponent: any;
  
  private el: HTMLInputElement;

  constructor(private element: ElementRef) { 
    this.el = this.element.nativeElement;
   }
  ngOnInit(): void {
      
    let reactNode = React.createElement(this.reactComponent);
    createRoot(this.el).render(reactNode);
  }
  ngOnChanges(){
    }
  ngOnDestroy(): void {
    }

}
