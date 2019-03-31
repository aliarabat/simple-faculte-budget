import {Component, OnInit} from '@angular/core';
import {BudgetSousProjetVo} from '../../controller/model/budget/budget-sous-projet.model';
import {BudgetService} from '../../controller/service/budget.service';

@Component({
  selector: 'app-budget-sous-projet',
  templateUrl: './budget-sous-projet.component.html',
  styleUrls: ['./budget-sous-projet.component.css']
})
export class BudgetSousProjetComponent implements OnInit {

  public _selectedBsp: BudgetSousProjetVo;
  public bspInfo: BudgetSousProjetVo = new BudgetSousProjetVo();

  constructor(private budgetService: BudgetService) {
  }

  get selectedBsp(): BudgetSousProjetVo {
    if (this._selectedBsp == null) {
      this._selectedBsp = new BudgetSousProjetVo();
    }
    return this._selectedBsp;
  }

  ngOnInit() {
    this.budgetService.findAllSousProjet();
  }

  public tableBudgetSousProjetInfo(bsp) {
    this.bspInfo = bsp;
  }

  public get budgetSousprojet() {
    return this.budgetService.budgetSousProjetCreate;
  }

  public get detaillesBudgetVo() {
    return this.budgetService.detaillesBudgetVo1;
  }

  public get budgetsSousProjets() {
    return this.budgetService.bsps;
  }

  public deleteBudgetSousProjet(bsp: BudgetSousProjetVo) {
    this.budgetService.deleteBudgetSousProjet(bsp);
  }

  public update() {
    this.budgetService.updateBudgetSousProjet(this.bspInfo.referenceSousProjet);
  }

  public get sousProjets(){
    return this.budgetService.allSousProjet;
  }

  public addBudgetSousProjet() {
    return this.budgetService.addBudgetSousProjet();
  }

  set selectedBsp(value: BudgetSousProjetVo) {
    this._selectedBsp = value;
  }

  public setBudgetSousProjetInfos(bspr: BudgetSousProjetVo){
    this._selectedBsp = bspr;
  }

  public findAllByAnneeAndBudgetSousProjet() {
    return this.budgetService.findAllByAnneeAndBudgetSousProjet();
  }


}
