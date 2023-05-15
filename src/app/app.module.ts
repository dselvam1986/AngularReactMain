import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderOnlyLibDinoModule} from 'header-only-lib-dino'
import { AppComponent } from './app.component';

import { ReactWrapperComponent } from './reactComponent/ReactWrapperComponent' 
import { ReactWrapDirective } from './directives/reactWrap.directive';


@NgModule({
  declarations: [
    AppComponent,
    ReactWrapperComponent,
    ReactWrapDirective
  ],
  imports: [
    BrowserModule,
    HeaderOnlyLibDinoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
