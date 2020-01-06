import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-input',
  styleUrls: ['./search-input.component.scss'],
  template: `
    <div class="search-input">
      <fa-icon
        class="search-icn"
        icon="search"
        fixedWidth="true"
        size="sm"
      ></fa-icon>
      <input
        [(ngModel)]="searchInput"
        type="text"
        [placeholder]="placeholder | titlecase"
      />
      <fa-icon
        class="times-icn"
        *ngIf="searchInput"
        (click)="searchInput = ''"
        icon="times"
        fixedWidth="true"
        size="sm"
      ></fa-icon>
    </div>
  `
})
export class SearchInputComponent implements OnInit {
  @Input() placeholder: string;
  searchInput: string;

  constructor() {}

  ngOnInit() {}
}
