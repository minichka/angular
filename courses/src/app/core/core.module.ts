import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './header/logo/logo.component';
import { BreadcrumpsComponent } from './breadcrumps/breadcrumps.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent, LogoComponent, BreadcrumpsComponent],
  exports: [HeaderComponent, FooterComponent, BreadcrumpsComponent]
})
export class CoreModule { }
