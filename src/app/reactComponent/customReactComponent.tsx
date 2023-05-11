import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import UserButton from "dino-react-user-button"

const containerElementName = 'customReactComponentContainer';

@Component({
  selector: 'customReactComponent',
  template: `<span #${containerElementName}></span>`,
  // styleUrls: [''],
  encapsulation: ViewEncapsulation.None,
})
export class CustomReactComponent implements OnChanges, OnDestroy, AfterViewInit {
  @ViewChild(containerElementName, { static: true }) containerRef!: ElementRef;

  // @Input() public counter = 10;
  // @Output() public componentClick = new EventEmitter<void>();



  constructor() {
      // this.handleDivClicked = this.handleDivClicked.bind(this);
  }

  // public handleDivClicked() {
  //     if (this.componentClick) {
  //         this.componentClick.emit();
  //         this.render();
  //     }
  // }

  ngOnChanges(changes: SimpleChanges): void {
      this.render();
  }

  ngAfterViewInit() {
      this.render();
  }

  ngOnDestroy() {
      ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
  }

  private render() {

    ReactDOM.render(<div className={'i-am-classy'}>
      <UserButton/>
    </div>, this.containerRef.nativeElement);

      // ReactDOM.render(<UserButton />, this.containerRef.nativeElement);
  }
}
