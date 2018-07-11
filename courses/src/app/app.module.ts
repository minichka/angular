import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CourseListModule } from './course-list/course-list.module';
import { CourseBoarderDirective } from './course-list/course-list-item/directive/course-boarder.directive';


@NgModule({
  declarations: [
    AppComponent,
    CourseBoarderDirective,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CourseListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
