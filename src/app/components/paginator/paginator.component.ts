import { Component } from '@angular/core';
import { Input } from '@angular/core';
 import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @Input()
  pageSizeOptions: any[] = [];
  @Input()
  config: any;
  selectedItem:[]= [];
  constructor(private router: Router) { }
  pageChange(newPage: number) {
    this.router.navigate(['/page/', newPage]);
    }
    changePageItemCount(selectedItem: { value: string; }) {
      localStorage.setItem('pageSize', selectedItem.value);
      this.config.itemsPerPage = selectedItem.value;
      }   
}
