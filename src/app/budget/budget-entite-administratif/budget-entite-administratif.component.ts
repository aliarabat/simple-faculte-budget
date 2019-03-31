import {Component, OnInit} from '@angular/core';
import {BudgetEntiteAdministratifVo} from '../../controller/model/budget/budget-entite-administratif.model';
import {BudgetService} from '../../controller/service/budget.service';

@Component({
  selector: 'app-budget-entite-administratif',
  templateUrl: './budget-entite-administratif.component.html',
  styleUrls: ['./budget-entite-administratif.component.css']
})
export class BudgetEntiteAdministratifComponent implements OnInit {

  private _beasNoInDb: Array<BudgetEntiteAdministratifVo> = [];
  private _selectedBea: BudgetEntiteAdministratifVo = new BudgetEntiteAdministratifVo();
  private _beas:Array<BudgetEntiteAdministratifVo>=[];
  private _budgetEntiteAdministratifInfo:BudgetEntiteAdministratifVo=new BudgetEntiteAdministratifVo();

  constructor(private budgetService: BudgetService) {
  }

  ngOnInit() {
    this.budgetService.findAllEntiteAdministratif();
  }

  public tableBudgetEntiteAdministratifInfo(bea:BudgetEntiteAdministratifVo){
    this.budgetEntiteAdministratifInfo=bea;
  }
  get beasNoInDb(): Array<BudgetEntiteAdministratifVo> {
    return this._beasNoInDb;
  }

  public get budgetEntiteAdmin() {
    return this.budgetService.budgetEntiteAdministratifCreate;
  }

  set beasNoInDb(value: Array<BudgetEntiteAdministratifVo>) {
    this._beasNoInDb = value;
  }


  public update() {
    this.budgetService.updateBudgetEntiteAdministratif(this._budgetEntiteAdministratifInfo.referenceEntiteAdministratif);
  }

  public deleteEntiteAdministratif(bea: BudgetEntiteAdministratifVo) {
    this.budgetService.deleteBudgetEntiteAdmin(bea);
  }

  public get sousProjets(){
    return this.budgetService.allSousProjet;
  }

  public get budgetSousProjetClone() {
    return this.budgetService.budgetSousProjetCreateClone1;
  }

  public get detailleBudgetVo() {
    return this.budgetService.detaillesBudgetVo2;
  }

  get beas() {
    return this.budgetService.beas;
  }

  public findAllByAnneeAndBudgetSousProjetAndBudgetEntitiAdmin() {
    return this.budgetService.findAllByAnneeAndBudgetSousProjetAndBudgetEntitiAdmin();
  }


  public get entiteAdministratif(){
    return this.budgetService.allEntiteAdministratif;
  }

  get selectedBea() {
    return this._selectedBea;
  }
  public addBudgetEntiteAdmin() {
    return this.budgetService.addBudgetEntiteAdministratif();
  }

  set selectedBea(value) {
    this._selectedBea = value;
  }

  public getBeaInfos(bear: BudgetEntiteAdministratifVo) {
    this._selectedBea = bear;
  }

  get budgetEntiteAdministratifInfo(): BudgetEntiteAdministratifVo {
    return this._budgetEntiteAdministratifInfo;
  }

  set budgetEntiteAdministratifInfo(value: BudgetEntiteAdministratifVo) {
    this._budgetEntiteAdministratifInfo = value;
  }
}
