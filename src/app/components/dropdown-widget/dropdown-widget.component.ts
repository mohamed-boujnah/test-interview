import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-dropdown-widget',
  templateUrl: './dropdown-widget.component.html',
  styleUrls: ['./dropdown-widget.component.scss']
})
export class DropdownWidgetComponent implements OnInit {

  @Input() data: string;
  choice: any = [];
  toogle: boolean = false;
  upDown : any = 0;
  constructor() { }

  ngOnInit() {
    this.choice.push(this.data[0]);
  }

  setOption(d){
    this.choice = [];
    this.choice.push(d);

  }

  toggelWidget(){
    this.toogle = !this.toogle;
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(evt: KeyboardEvent) {
    this.toogle = false
  }

  @HostListener('document:click')
  clickoutside() {
    //this.toogle ? this.toogle = false : null;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 

    if(this.upDown <= this.data.length || this.upDown >= 0){
      if (event.key === "ArrowDown") {
        this.upDown < this.data.length - 1 ? this.upDown++ : null;
        this.setOption(this.data[this.upDown]);
      }else if (event.key === "ArrowUp"){
        this.upDown > 0 ? this.upDown-- : null;
        this.setOption(this.data[this.upDown]);
      }
    }
  }

  @HostListener('document:keypress', ['$event'])
  onKeyEnter(evt: KeyboardEvent) {
    if (evt.key === "Enter") 
      this.toogle = false
  }

}
