import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-func-category',
  templateUrl: 'func-category.html',
})
export class FuncCategoryPage {

  @ViewChild('catname') catname;
  data;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initCategory();
  }

  initCategory(){
    let ref = firebase.database().ref('category');
    ref.on('value', snapshot => {
      let arr = [];
      snapshot.forEach(snapshot => {
        arr.push(snapshot.val());
      });
      this.data = arr;
    });
  }

  addCategory(){
    let incrementer = this.data.length;
    let ref = firebase.database().ref('category');
    if(this.data === undefined || this.data.length == 0){
      ref.push({
        cat_val: incrementer+1,
        name: this.catname.value
      });
    }
    else{
      ref.push({
        cat_val: incrementer+1,
        name: this.catname.value
      });
    }
  }
}
