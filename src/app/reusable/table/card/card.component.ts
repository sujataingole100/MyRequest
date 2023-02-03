import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardHeader:string='';
  @Output() OpenModule=new EventEmitter<any>();
  @Output() CloseModule=new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  onModalOpen() {
    debugger
    const modal = document.getElementById("addClientModal");
    if (modal != null) {
      modal.style.display = "block";
    }
    this.OpenModule.emit(modal);
  }
  onModalClose() {
    debugger
    const modal = document.getElementById("addClientModal");
    if (modal != null) {
      modal.style.display = "none";
    }
    this.CloseModule.emit(modal);
  }
}
