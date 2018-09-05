import { ModalComponent } from './shared/modal/modal.component';
import { FormComponent } from './shared/form/form.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SliderComponent } from './shared/slider/slider.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SliderComponent,
    NavbarComponent,
    FormComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
