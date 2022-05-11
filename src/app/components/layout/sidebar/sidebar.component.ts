import { Component, ElementRef, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  animations: [
    trigger('submenu', [
      state(
        'hidden',
        style({
          height: '0',
          overflow: 'hidden',
          opacity: 0,
        })
      ),
      state(
        'visible',
        style({
          height: '*',
          opacity: 1,
        })
      ),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
    ]),
  ],
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() active!: boolean;

  activeSubmenus: { [key: string]: boolean } = {};

  adminSidNavItems: any[] = [
    { name: 'Sales/ Marketing', link: '/application/sales', authorized: false },
    { name: 'Yard Management', link: '/application/yards', authorized: false },
    {
      name: 'Receiving Management',
      link: '/application/receiving',
      authorized: false,
    },
    {
      name: 'Storage Management',
      link: '/application/storage',
      authorized: false,
    },
    {
      name: 'Dispatching Management',
      link: '/application/dispatching',
      authorized: false,
    },
  ];

  adminSubItems: any[] = [];
  adminSubMenu: any[] = [
    {
      id: 1,
      name: 'Modules',
      link: '/admin/modules',
      value: 'Administration - Modules',
    },
    {
      id: 2,
      name: 'Users',
      link: '/admin/users',
      value: 'Administration - Users',
    },
    {
      id: 3,
      name: 'Companies',
      link: '/admin/companies',
      value: 'Administration - Companies',
    },
    {
      id: 4,
      name: 'Branches',
      link: '/admin/branches',
      value: 'Administration - Branches',
    },
    {
      id: 5,
      name: 'Storages',
      link: '/admin/storages',
      value: 'Administration - Storages',
    },
    {
      id: 6,
      name: 'Materials',
      link: '/admin/materials',
      value: 'Administration - Materials',
    },
    {
      id: 7,
      name: 'Selections',
      link: '/admin/selections',
      value: 'Administration - Selections',
    },
  ];

  salesAndMarketingSubItems: any[] = [];
  salesAndMarketingMenu: any[] = [
    {
      id: 1,
      name: 'Customers',
      link: '/sales/customers',
      value: 'Sales and Marketing - Customers',
      authorized: false,
    },
    { id: 2, name: 'Services', link: '/sales/services', value: '' },
    { id: 3, name: 'Rate Sheets (RS)', link: '/sales/rate-sheets', value: '' },
    { id: 3, name: 'Reports', link: '/sales/reports', value: '' },
  ];

  yardsManagementSubItems: any[] = [];
  yardsManagementMenu: any[] = [
    {
      id: 1,
      name: 'Loading Docks',
      link: '/yards/loading-docks',
      value: '',
      authorized: false,
    },
    {
      id: 2,
      name: 'Plugin Stations',
      link: '/yards/plugin-stations',
      value: '',
      authorized: false,
    },
    {
      id: 3,
      name: 'Truck Arrival Request (TR)',
      link: '/yards/truck-arrival-request',
      value: '',
      authorized: false,
    },
    {
      id: 4,
      name: 'Truck Arrival (TA)',
      link: '/yards/truck-arrival',
      value: '',
      authorized: false,
    },
    {
      id: 5,
      name: 'Reports',
      link: '/yards/reports',
      value: '',
      authorized: false,
    },
  ];

  receivingSubItems: any[] = [];
  receivingMenu: any[] = [
    {
      id: 1,
      name: 'Storage Rooms',
      link: '/receiving/storage-rooms',
      value: '',
      authorized: false,
    },
    {
      id: 3,
      name: 'Warehouse Receiving (WR)',
      link: '/receiving/warehouse-receivings',
      value: '',
      authorized: false,
    },
    {
      id: 4,
      name: 'Put Away (PA)',
      link: '/receiving/put-aways',
      value: '',
      authorized: false,
    },
    {
      id: 5,
      name: 'Reports',
      link: '/receiving/reports',
      value: '',
      authorized: false,
    },
  ];
  storageSubItems: any[] = [];
  storageMenu: any[] = [
    {
      id: 1,
      name: 'Bin To Bin',
      link: '/storage/bin-to-bin',
      value: '',
      authorized: false,
    },
    {
      id: 3,
      name: 'Partial Bin',
      link: '/storage/partial-bin',
      value: '',
      authorized: false,
    },
    {
      id: 4,
      name: 'Physical Count',
      link: '/storage/physical-count',
      value: '',
      authorized: false,
    },
    {
      id: 5,
      name: 'Reports',
      link: '/storage/reports',
      value: '',
      authorized: false,
    },
  ];

  dispatchingSubItems: any[] = [];
  dispatchingMenu: any[] = [
    {
      id: 1,
      name: 'Transfer Request',
      link: '/dispatching/transfer-requests',
      value: '',
      authorized: false,
    },
    {
      id: 2,
      name: 'Dispatch Request',
      link: '/dispatching/dispatch-requests',
      value: '',
      authorized: false,
    },
    {
      id: 3,
      name: 'Pick List',
      link: '/dispatching/pick-lists',
      value: '',
      authorized: false,
    },
    {
      id: 4,
      name: 'Dispatch Order',
      link: '/dispatching/dispatch-orders',
      value: '',
      authorized: false,
    },
    {
      id: 4,
      name: 'Reports',
      link: '/dispatching/reports',
      value: '',
      authorized: false,
    },
  ];

  userSideNavItems: any[] = [
    // {name: 'Profile', link: '/applicant/applicant-information'},
  ];

  userSideNavSubItems: any[] = [{ name: '', link: '' }];

  sideNavItems: any[] = this.userSideNavItems;
  sideNavSubItems: any[] = this.userSideNavSubItems;

  scrollable = true;

  user_type: any = localStorage.getItem('user_type');


  isComponentShown: boolean = false;
  constructor(
    private el: ElementRef,
    private router: Router,
  ) {
    if (this.user_type == 'User') this.sideNavItems = this.adminSidNavItems;
    this.sideNavSubItems = this.adminSubMenu;
  }

  toggleSubmenu(event: Event, name: string) {
    this.activeSubmenus[name] = this.activeSubmenus[name] ? false : true;
    event.preventDefault();
  }

  isSubmenuActive(name: string) {
    if (this.activeSubmenus.hasOwnProperty(name)) {
      return this.activeSubmenus[name];
    } else if (this.router.isActive(name, false)) {
      this.activeSubmenus[name] = true;
      return true;
    }

    return false;
  }

  ngOnInit() {
  }
}
