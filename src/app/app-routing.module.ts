import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from '../app/course/course.component';

const routes: Routes = [
    {
        path: 'course',
        component: CourseComponent
    }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})

export class AppRoutingModule { }