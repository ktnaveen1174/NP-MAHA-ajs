import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'collegeworld';

  constructor(private router:Router){}
  
  goToPage(pageName:string):void{
    console.log("Page name", pageName)
    this.router.navigate([`${pageName}`]);
  }
}
