import { Directive, ElementRef, Input, OnChanges, OnDestroy, inject } from "@angular/core";
import { ComponentProps, createElement, ElementType } from "react";
import {createRoot} from 'react-dom/client'

@Directive({
    selector: '[reactComponentDirective]',
})

export class ReactComponentDirective<Comp extends ElementType> implements OnChanges, OnDestroy {
    @Input() reactComponent: Comp | any;
    @Input() props: ComponentProps<Comp> | any;
    
    private root = createRoot(inject(ElementRef).nativeElement);

    ngOnChanges(){
        this.root.render(createElement(this.reactComponent, this.props))
    }

    ngOnDestroy(): void {
        this.root.unmount()
    }

}