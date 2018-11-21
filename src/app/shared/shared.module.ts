import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ModalComponent } from './modal/modal.component';
import { LogComponent } from './log/log.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContactComponent, FooterComponent, FormComponent, NavbarComponent, SliderComponent, SpinnerComponent, ModalComponent, LogComponent, DetailComponent]
})
export class SharedModule { }
