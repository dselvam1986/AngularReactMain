import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderOnlyLibDinoModule} from 'header-only-lib-dino'
import { AppComponent } from './app.component';
import { CustomReactComponent } from './reactComponent/customReactComponent';
// import { ReactComponentDirective } from './directives/ReactComponentDirective';
// import { ReactDIrectiveDirective } from './directives/react-directive.directive';
import { ReactWrapperComponent } from './reactComponent/ReactWrapperComponent' 


@NgModule({
  declarations: [
    AppComponent,
    CustomReactComponent,
    ReactWrapperComponent
    // ReactComponentDirective,
    // ReactDIrectiveDirective
  ],
  imports: [
    BrowserModule,
    HeaderOnlyLibDinoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
