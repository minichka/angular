import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list/course-list.component';
import { AddCourseComponent } from './course-list/course-list/modal/add-course/add-course.component';
import { NoContentComponent } from './core/no-content/no-content.component';
import { IsLoggedInGuard } from './guard/is-logged-in.guard';
import { LoginPageComponent } from './core/login-page/login-page.component';
import { AuthorizationService } from './services/authorization.service';
import { EditComponentComponent } from './course-list/course-list/modal/edit-component/edit-component.component';

const rotes: Routes = [
  { path: '',
    redirectTo: localStorage.getItem('currentUser') != null ? '/courses' : '/login', 
    pathMatch: 'full' 
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  { path: 'courses', 
    component: CourseListComponent, 
    canActivate: [IsLoggedInGuard],
  },
  { path: 'courses/new', component: AddCourseComponent, canActivate: [IsLoggedInGuard]},
  { path: 'courses/:id', component: EditComponentComponent, canActivate: [IsLoggedInGuard]},
  { path: '**', component: NoContentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(rotes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  constructor(private authService: AuthorizationService){}
}
