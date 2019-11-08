import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  data: Array<any>;
  loadedEst: Array<any>

  constructor(public navCtrl: NavController, public modalCrtl: ModalController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.checkNews();
  }

  addNews(){
    let modal = this.modalCrtl.create('AddNewsPage');
    modal.present();
  }

  checkNews(){
    let ref = firebase.database().ref('postNews');
    ref.on('value', data => {
      let arr = [];
      data.forEach(data => {
        let strDate = data.val().date;
        let date = strDate.substring(0, 10);
        arr.push({
          key: data.key,
          date: date,
          title: data.val().title,
          name: data.val().name,
          image: data.val().image,
          description: data.val().description,
        });
        return false;
      });
      this.data = arr.reverse();
      this.loadedEst = arr;
    });
  }

  initializeItem(): void{
    this.data = this.loadedEst;
  }

  getItems(searchbar){
    this.initializeItem();
    let q = searchbar.srcElement.value;

    if(!q){
      return;
    }

    this.data = this.data.filter(data =>{
      if(data.title && q){
        if(data.title.toLowerCase().indexOf(q.toLowerCase()) > -1){
          return true;
        }
        return false;
      }
    });
    console.log(q, this.data.length);
  }

  update(key){
    let modal = this.modalCrtl.create('EditNewsPage', {key: key});
    modal.present();
  }

  remove(key){
    let ref = firebase.database().ref('postNews/' + key);
    let alert = this.alertCtrl.create({
      message: 'Are you sure you want to REMOVE this Post?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => { 
             ref.remove();
          }
        }
      ]
    });
    alert.present();
  }

}
