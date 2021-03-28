import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
model: MinhaClasse;


  constructor(public navCtrl: NavController) {
    this.model = new MinhaClasse();
  }

salvar(){
  console.log(this.model);
}

}


export class MinhaClasse {

  public nomepaciente: string = "";
  public sexo: string = "";
  public endereco: string = "";
}




