import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './header/logo/logo.component';
import { BreadcrumpsComponent } from './breadcrumps/breadcrumps.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [HeaderComponent, FooterComponent, LogoComponent, BreadcrumpsComponent, LoginPageComponent,],
  exports: [HeaderComponent, FooterComponent, BreadcrumpsComponent,LoginPageComponent]
})
export class CoreModule { }
