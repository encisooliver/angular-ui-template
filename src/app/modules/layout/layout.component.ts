import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  menuActive!: boolean;

  constructor() {
  }

  onMenuButtonClick() {
      this.menuActive = true;
      this.addClass(document.body, 'blocked-scroll');
  }

  onMaskClick() {
      this.hideMenu();
  }

  hideMenu() {
      this.menuActive = false;
      this.removeClass(document.body, 'blocked-scroll');
  }

  addClass(element: any, className: string) {
      if (element.classList)
          element.classList.add(className);
      else
          element.className += ' ' + className;
  }

  removeClass(element: any, className: string) {
      if (element.classList)
          element.classList.remove(className);
      else
          element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }

  ngOnInit() {}
}
