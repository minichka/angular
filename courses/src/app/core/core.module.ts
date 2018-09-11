import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './header/logo/logo.component';
import { BreadcrumpsComponent } from './breadcrumps/breadcrumps.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoContentComponent } from './no-content/no-content.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthorFieldComponent } from './custom-fields/author-field/author-field.component';



@NgModule({
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [HeaderComponent, FooterComponent, LogoComponent, BreadcrumpsComponent, LoginPageComponent, NoContentComponent, LoaderComponent, AuthorFieldComponent],
  exports: [HeaderComponent, FooterComponent, BreadcrumpsComponent,LoginPageComponent, LoaderComponent, AuthorFieldComponent],
})
export class CoreModule { }
