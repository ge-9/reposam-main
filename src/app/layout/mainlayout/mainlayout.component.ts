import { Component, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { LazyDialogService } from 'src/app/services/lazy-dialog.service';


@Component({
  selector: 'app-mainlayout',
  templateUrl: './mainlayout.component.html',
  styleUrls: ['./mainlayout.component.css']
})
export class MainlayoutComponent {
  opened: boolean = false;

  // TOGGLE ITEMS
  @ViewChild(MatSidenav) sidenav!: MatSidenav;


// MENU ITEMS  
  @Input() sidenavStatus: boolean = false;

    list = [
      {
       number: '1',
       name: 'Home',
       icon: 'home',
       tooltip: 'Home',
       url: './homepage',
      
      },
      {
       number: '2',
       name: 'Events',
       icon: 'event',
       tooltip: 'Events',
       url: './footer',
      },
      {
       number: '3',
       name: 'Calendar',
       icon: 'calendar_month',
       tooltip: 'Calendar',
       url: './account-settings',
      },
    ]

    menu = [
      {
        number: '1',
        name: 'New',
        icon: 'home',
        tooltip: 'New',
        url: './homepage',
  
      },
    ]

    
    // VIEWPOINT
    constructor(private observer: BreakpointObserver, public lazyDialog: LazyDialogService){

    }

    ngAfterViewInit(){
      this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
        if(res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
    }


    
    //TOP NAV
    menuItems: MenuItem[] = [
      {
        label: "Office of the Chief",
        icon: "",
        showOnMobile: false,
        showOnTablet: true,
        showOnDesktop: true

      },
      {
        label: "PPDS",
        icon: "",
        showOnMobile: false,
        showOnTablet: true,
        showOnDesktop: true
      },

      {
        label: "PMES",
        icon: "",
        showOnMobile: false,
        showOnTablet: true,
        showOnDesktop: true
      },
      {
        label: "FES",
        icon: "",
        showOnMobile: false,
        showOnTablet: false,
        showOnDesktop: true
      },
      {
        label: "FCS",
        icon: "",
        showOnMobile: false,
        showOnTablet: false,
        showOnDesktop: true
      },
      {
        label: "MIS",
        icon: "",
        showOnMobile: false,
        showOnTablet: false,
        showOnDesktop: true
      },
    ];

  ngOnInit(): void {
    
  }

}

export interface MenuItem {
  label:string;
  icon: string;
  showOnMobile: boolean;
  showOnTablet: boolean;
  showOnDesktop: boolean;
}