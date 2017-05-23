import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the Lista page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})

export class Lista {
  ninos:Array<nino>=[{
    img:"assets/img/David.png",
    nombre:"Axel Calfulaf B",
    ap1:"Andres Calfulaf P",
    fono1:"942693087",
    estado:"false"
  },
  {
    img:"assets/img/Ester.png",
    nombre:"Amy Calfulaf O",
    ap1:"Andres Calfulaf P",
    ap2:"Jacqueline Obando D",
    fono1:"942693087",
    fono2:"942693087",
    estado:"false"
  }];
   ninosx: string = "false";
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,platform: Platform) {
    this.isAndroid = platform.is('android');
  }

  cambiarEstado(n:any):void{
    if(n.estado=="true")
      n.estado="false";
    else 
      n.estado="true";
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Lista');
  }

}
interface nino{
  img:string;
  nombre:string;
  ap1:string;
  ap2?:string;
  fono1:string;
  fono2?:string;
  estado:string;
}
