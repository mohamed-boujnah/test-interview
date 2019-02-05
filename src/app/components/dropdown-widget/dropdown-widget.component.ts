import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dropdown-widget',
  templateUrl: './dropdown-widget.component.html',
  styleUrls: ['./dropdown-widget.component.scss']
})
export class DropdownWidgetComponent implements OnInit {


  @Input() data: any;
  @Input() deal: any;
  choice: any = [];
  toogle: boolean = false;
  upDown : any = 0;

  constructor(private ef : ElementRef) { }

  ngOnInit() {
    this.choice.push(this.data[0]);
  }

  setOption(d, i){
    this.choice = [];
    this.choice.push(d);
    this.upDown = i;

  }

  toggelWidget(event){
    this.toogle = !this.toogle;
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(evt: KeyboardEvent) {
    this.toogle = false
  }

  @HostListener('document:click', ['$event.target'])
  clickoutside(targetElement) {

    const clickedInside = this.ef.nativeElement.contains(targetElement);
        if (!clickedInside){
          this.toogle = false;

        }
  }
   
    
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    /** if the component has a class opened then use arrows */
    if(this.ef.nativeElement.querySelector('.opened') != undefined){
      if(this.upDown <= this.data.length || this.upDown >= 0){
        if (event.key === "ArrowDown") {
          this.upDown < this.data.length - 1 ? this.upDown++ : null;
          this.setOption(this.data[this.upDown], this.upDown);
        }else if (event.key === "ArrowUp"){
          this.upDown > 0 ? this.upDown-- : null;
          this.setOption(this.data[this.upDown], this.upDown);
        }
      }
    }
  }

  @HostListener('document:keypress', ['$event'])
  onKeyEnter(evt: KeyboardEvent) {
    if (evt.key === "Enter") 
      this.toogle = false
  }

}
