import { Component, OnInit } from '@angular/core';
import {MagasinService} from "../../controller/service/magasin.service";

@Component({
  selector: 'app-magasin-create',
  templateUrl: './magasin-create.component.html',
  styleUrls: ['./magasin-create.component.css']
})
export class MagasinCreateComponent implements OnInit {

  constructor(private magasinService:MagasinService) { }

  ngOnInit() {
  }
  public saveMagasin(){
    this.magasinService.saveMagasin();
  }

  public get magasin(){
    return this.magasinService.magasinCreate;
  }
}
