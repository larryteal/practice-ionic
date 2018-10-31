import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items: string[];
  public inputValue: string;
  @ViewChild('search') search;
  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      "Amsddfd",
      "Bdssfs",
      "Cdfgkk",
      "RdfFvff",
      "RffdFvff",
      "RFgvff",
      "RFvvff",
    ];
  }

  getItems(ev: any){
    // console.log( ev instanceof UIEvent)
    console.log(this.inputValue);
    this.initializeItems();
    let value = ev.target.value;
    if(value && value.trim() != ''){
      this.items = this.items.filter(item => {
        return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
      });
    }
    // console.log(ev.target.value)
  }

  onCancel(ev: any) {
    console.log(ev);
    setTimeout(()=>{
      this.search.setFocus();
      // this.search.positionPlaceholder();
    },1000)
  }
  
}
