import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Output() menuButtonClick: EventEmitter<any> = new EventEmitter();

  @ViewChild('topbarMenu') topbarMenu!: ElementRef;

  user_email: any = localStorage.getItem('email');
  dateToday: any = localStorage.getItem('dateToday');
  user_type: any = localStorage.getItem('user_type');
  warehouse_id: any = localStorage.getItem('warehouse_id');
  warehouse: string = 'Warehouse';
  constructor(
    private router: Router,
  ) {

  }

  logout() {
    localStorage.clear();
    location.reload();
  }

  onMenuButtonClick(event: Event) {
    this.menuButtonClick.emit();
    event.preventDefault();
  }
  ngOnInit() {
  }

}
