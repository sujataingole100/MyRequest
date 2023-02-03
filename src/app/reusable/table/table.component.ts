import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() headArray: any[] = [];
  @Input() gridArray: any[] = [];
  @Input() heading: string = '';
  @Output() OnEdit = new EventEmitter<any>();
  @Output() OnDelete = new EventEmitter<any>();
  @Output() Onadd = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  edit(item: any) {
    this.OnEdit.emit(item);
  }
  delete(item: any) {
    this.OnDelete.emit(item);
  }
  Add() {
    this.Onadd.emit();
  }
}
