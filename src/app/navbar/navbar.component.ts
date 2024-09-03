import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMobile: boolean = false;
  isExpanded: boolean = false;


  constructor(private eRef: ElementRef) { }

  ngOnInit() {
    this.checkWindowSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkWindowSize();
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isExpanded = false;
      let sidenav = document.querySelector('.sidenav');
      if (sidenav) {
        sidenav.classList.remove('isExpanded');
      }
    }
  }

  private checkWindowSize() {
    this.isMobile = window.innerWidth < 768;
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
    let sidenav = document.querySelector('.sidenav');
    if (sidenav === null) {
      return;
    }
    if (this.isExpanded) {
      sidenav.classList.add('isExpanded');
    } else {
      sidenav.classList.remove('isExpanded');
    }
  }

  closeSidenav() {
    this.isExpanded = false;
    let sidenav = document.querySelector('.sidenav');
    if (sidenav) {
      sidenav.classList.remove('isExpanded');
    }
  }
}
