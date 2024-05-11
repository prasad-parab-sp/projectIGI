import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  dropDownClass = 'rc_nav';

  constructor() { }

  ngOnInit() {
  }



  openInDropDown() {
     
this.dropDownClass = this.dropDownClass === 'rc_nav' ? 'rc_nav responsive' : 'rc_nav'
    }
}
