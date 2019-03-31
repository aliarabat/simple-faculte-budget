import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BudgetFaculteVo} from '../model/budget/budget-faculte.model';
import {BudgetSousProjetVo} from '../model/budget/budget-sous-projet.model';
import {BudgetEntiteAdministratifVo} from '../model/budget/budget-entite-administratif.model';
import {BudgetCompteBudgitaireVo} from '../model/budget/budget-compte-budgitaire.model';
import {CompteBudgitaireVo} from '../model/budget/compte-budgitaire.model';
import {DetaillesBudget} from '../model/budget/detailles-budget.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private http: HttpClient) {
  }

  private _budgetFaculteCreate1: BudgetFaculteVo = new BudgetFaculteVo(0);
  //private _bsps.budgetSousProjetVo: Array<BudgetSousProjetVo> = [];
  private _beas: Array<BudgetEntiteAdministratifVo> = [];

  // Les urls
  private _host = 'http://localhost:8099/budget_api/';

  get host(): string {
    return this._host;
  }

  set host(value: string) {
    this._host = value;
  }

  //variables du pointage sur les formulaires
  private _budgetFaculteCreate: BudgetFaculteVo = new BudgetFaculteVo(0, new Date().getFullYear()-1);

  private _url_bf = this._host + 'budget_api_facultes/';

  get url_bf(): string {
    return this._url_bf;
  }

  set url_bf(value: string) {
    this._url_bf = value;
  }

  private _url_bsp = this._host + 'budget_sous_projet/';

  get url_bsp(): string {
    return this._url_bsp;
  }

  set url_bsp(value: string) {
    this._url_bsp = value;
  }

  private _url_bea = this._host + 'budget_entite_admin/';

  get url_bea(): string {
    return this._url_bea;
  }

  set url_bea(value: string) {
    this._url_bea = value;
  }

  private _url_bcb = this._host + 'budget_compte_budgitaires/';

  get url_bcb(): string {
    return this._url_bcb;
  }

  set url_bcb(value: string) {
    this._url_bcb = value;
  }

  private _budgetSousProjetCreate: BudgetSousProjetVo = new BudgetSousProjetVo(0);

  get budgetSousProjetCreate(): BudgetSousProjetVo {
    return this._budgetSousProjetCreate;
  }

  private _bcbs: Array<BudgetCompteBudgitaireVo> = [];
  //findAll
  private _allSousProjet: Array<BudgetSousProjetVo> = [];
  private _allEntiteAdministratif: Array<BudgetEntiteAdministratifVo> = [];

  set budgetSousProjetCreate(value: BudgetSousProjetVo) {
    this._budgetSousProjetCreate = value;
  }

  private _budgetSousProjetCreateClone1: BudgetSousProjetVo = new BudgetSousProjetVo();

  get budgetSousProjetCreateClone1(): BudgetSousProjetVo {
    return this._budgetSousProjetCreateClone1;
  }

  set budgetSousProjetCreateClone1(value: BudgetSousProjetVo) {
    this._budgetSousProjetCreateClone1 = value;
  }

  private _budgetSousProjetCreateClone2: BudgetSousProjetVo = new BudgetSousProjetVo();

  get budgetSousProjetCreateClone2(): BudgetSousProjetVo {
    return this._budgetSousProjetCreateClone2;
  }

  set budgetSousProjetCreateClone2(value: BudgetSousProjetVo) {
    this._budgetSousProjetCreateClone2 = value;
  }

  private _budgetEntiteAdministratifCreate: BudgetEntiteAdministratifVo = new BudgetEntiteAdministratifVo();

  get budgetEntiteAdministratifCreate(): BudgetEntiteAdministratifVo {
    return this._budgetEntiteAdministratifCreate;
  }

  set budgetEntiteAdministratifCreate(value: BudgetEntiteAdministratifVo) {
    this._budgetEntiteAdministratifCreate = value;
  }

  private _budgetEntiteAdministratifCreateClone: BudgetEntiteAdministratifVo = new BudgetEntiteAdministratifVo();

  //full in comboboxes with references sous projet and entite administratif
  public findAllSousProjet() {
    return this.http.get<Array<BudgetSousProjetVo>>(this._url_bsp + 'all/sousprojet').subscribe(
      data => {
        if (data != null) {
          this._allSousProjet = [];
          this._allSousProjet = data;
        } else {
          Swal({
            type: 'error',
            title: 'Aucun informations trouvés',
            text: 'Something went wrong!'
          });
        }
      }, error => {
        console.log(error);
      }
    );
  }

  public findAllEntiteAdministratif() {
    return this.http.get<Array<BudgetEntiteAdministratifVo>>(this._url_bea + 'all/entiteadministratif').subscribe(
      data => {
        if (data != null) {
          this._allEntiteAdministratif = [];
          this._allEntiteAdministratif = data;
        } else {
          Swal({
            type: 'error',
            title: 'Aucun informations trouvés',
            text: 'Something went wrong!'
          });
        }
      }, error => {
        console.log(error);
      }
    );
  }

  get budgetEntiteAdministratifCreateClone(): BudgetEntiteAdministratifVo {
    return this._budgetEntiteAdministratifCreateClone;
  }

  set budgetEntiteAdministratifCreateClone(value: BudgetEntiteAdministratifVo) {
    this._budgetEntiteAdministratifCreateClone = value;
  }

  /*public refreshAllFromBsp(){
    this._budgetFaculteCreate.budgetSousProjetVo = [];
    this._beas = [];
    this._bcbs = [];
  }
  public refreshAllFromBea(){
    this.budgetFaculteCreate=new BudgetFaculteVo();
    this._budgetFaculteCreate.budgetSousProjetVo = [];
    this._beas = [];
    this._bcbs = [];
  }*/

  private _budgetCompteBudgitaireCreate: BudgetCompteBudgitaireVo = new BudgetCompteBudgitaireVo();

  get budgetCompteBudgitaireCreate(): BudgetCompteBudgitaireVo {
    return this._budgetCompteBudgitaireCreate;
  }

  set budgetCompteBudgitaireCreate(value: BudgetCompteBudgitaireVo) {
    this._budgetCompteBudgitaireCreate = value;
  }

  //gettters and setters
  get budgetFaculteCreate(): BudgetFaculteVo {
    return this._budgetFaculteCreate;
  }

  set budgetFaculteCreate(value: BudgetFaculteVo) {
    this._budgetFaculteCreate = value;
  }

  get budgetFaculteCreate1(): BudgetFaculteVo {
    return this._budgetFaculteCreate1;
  }

  set budgetFaculteCreate1(value: BudgetFaculteVo) {
    this._budgetFaculteCreate1 = value;
  }

  private _compteBudgitaireCreate: CompteBudgitaireVo = new CompteBudgitaireVo();

  get allSousProjet(): Array<BudgetSousProjetVo> {
    return this._allSousProjet;
  }

  set allSousProjet(value: Array<BudgetSousProjetVo>) {
    this._allSousProjet = value;
  }

  get allEntiteAdministratif(): Array<BudgetEntiteAdministratifVo> {
    return this._allEntiteAdministratif;
  }

  set allEntiteAdministratif(value: Array<BudgetEntiteAdministratifVo>) {
    this._allEntiteAdministratif = value;
  }

  get compteBudgitaireCreate(): CompteBudgitaireVo {
    return this._compteBudgitaireCreate;
  }

  get beas(): Array<BudgetEntiteAdministratifVo> {
    if (this._beas == null) {
      this._beas = [];
    }
    return this._beas;
  }

  get bcbs(): Array<BudgetCompteBudgitaireVo> {
    if (this._bcbs == null) {
      this._bcbs = [];
    }
    return this._bcbs;
  }

  set compteBudgitaireCreate(value: CompteBudgitaireVo) {
    this._compteBudgitaireCreate = value;
  }

  //detailles budget vo pour chaque composant
  private _detaillesBudgetVo1: DetaillesBudget = new DetaillesBudget();

  get detaillesBudgetVo1(): DetaillesBudget {
    return this._detaillesBudgetVo1;
  }

  set detaillesBudgetVo1(value: DetaillesBudget) {
    this._detaillesBudgetVo1 = value;
  }

  private _detaillesBudgetVo2: DetaillesBudget = new DetaillesBudget();

  get detaillesBudgetVo2(): DetaillesBudget {
    return this._detaillesBudgetVo2;
  }

  set detaillesBudgetVo2(value: DetaillesBudget) {
    this._detaillesBudgetVo2 = value;
  }

  private _detaillesBudgetVo3: DetaillesBudget = new DetaillesBudget();

  get detaillesBudgetVo3(): DetaillesBudget {
    return this._detaillesBudgetVo3;
  }

  set detaillesBudgetVo3(value: DetaillesBudget) {
    this._detaillesBudgetVo3 = value;
  }

  //selected objects
  private _selectdeBudgetSp: BudgetSousProjetVo = new BudgetSousProjetVo();

  get selectdeBudgetSp(): BudgetSousProjetVo {
    return this._selectdeBudgetSp;
  }

  set selectdeBudgetSp(value: BudgetSousProjetVo) {
    this._selectdeBudgetSp = value;
  }

  //resultat de recheres s'enregistrent dans ces variables
  private _budgetFacultes: Array<BudgetFaculteVo> = [];

  get budgetFacultes(): Array<BudgetFaculteVo> {
    return this._budgetFacultes;
  }

  set budgetFacultes(value: Array<BudgetFaculteVo>) {
    this._budgetFacultes = value;
  }

  get bsps(): Array<BudgetSousProjetVo> {
    if (this._budgetFaculteCreate.budgetSousProjetVo == null) {
      this._budgetFaculteCreate.budgetSousProjetVo = [];
    }
    return this._budgetFaculteCreate.budgetSousProjetVo;
  }

  //permet d'ajouter le budget Sous Projet
  public addBudgetSousProjet() {
    if (this._budgetSousProjetCreate.referenceSousProjet == null) {
      Swal({
        type: 'error',
        title: 'Error',
        text: 'Merci de saisir le reference!'
      });
    } else if (this._budgetFaculteCreate.budgetSousProjetVo.findIndex(bsp => bsp.referenceSousProjet == this._budgetSousProjetCreate.referenceSousProjet) != -1) {
      Swal({
        type: 'error',
        title: 'Avertissement',
        text: 'Ce sous projet existe déja!'
      });
    } else {
      if (this._budgetFaculteCreate.budgetSousProjetVo == null) {
        this._budgetFaculteCreate.budgetSousProjetVo = [];
      }
      let bspClone: BudgetSousProjetVo = new BudgetSousProjetVo(0, this._budgetSousProjetCreate.referenceSousProjet);
      bspClone.detaillesBudgetVo = this._detaillesBudgetVo1;
      //this._budgetFaculteCreate.budgetSousProjetVo.push(bspClone);
      this._budgetFaculteCreate.budgetSousProjetVo.push(bspClone);
      this._detaillesBudgetVo1 = new DetaillesBudget();
    }
  }

  //permet d'ajouter le budget entite administratif
  public addBudgetEntiteAdministratif() {
    if (this._budgetSousProjetCreateClone1.referenceSousProjet == null || this._budgetEntiteAdministratifCreate.referenceEntiteAdministratif == null) {
      Swal({
        type: 'error',
        title: 'Error',
        text: 'Merci de remplir tous les champs!'
      });
    } else if (this._beas.findIndex(bea => bea.referenceEntiteAdministratif == this._budgetEntiteAdministratifCreate.referenceEntiteAdministratif && bea.budgetSousProjetVo.referenceSousProjet == this._budgetSousProjetCreateClone1.referenceSousProjet) != -1) {
      Swal({
        type: 'error',
        title: 'Avertissement',
        text: 'Cette entité administratif déja existe!'
      });
    } else {
      this._budgetFaculteCreate.budgetSousProjetVo.forEach(bsp => {
        if (bsp.referenceSousProjet === this._budgetSousProjetCreateClone1.referenceSousProjet) {
          let beaClone: BudgetEntiteAdministratifVo = new BudgetEntiteAdministratifVo(0, this._budgetEntiteAdministratifCreate.referenceEntiteAdministratif);
          beaClone.detaillesBudgetVo = this._detaillesBudgetVo2;
          if (bsp.budgetEntiteAdministratifVo == null) {
            bsp.budgetEntiteAdministratifVo = [];
          }
          bsp.budgetEntiteAdministratifVo.push(beaClone);
          this._beas.push(beaClone);
          this._detaillesBudgetVo2 = new DetaillesBudget();
        }
      });
    }
  }

  //permet d'ajouter le budget compte budgitaire
  public addBudgetCompteBudgitaireCreate() {
    if (this._budgetSousProjetCreateClone2.referenceSousProjet == null || this._budgetEntiteAdministratifCreateClone.referenceEntiteAdministratif == null) {
      Swal({
        type: 'error',
        title: 'Error',
        text: 'Merci de remplir tous les champs!'
      });
    }/*else if (this._bcbs.findIndex(bcb => bcb.budgetEntiteAdministratifVo.referenceEntiteAdministratif == this._budgetEntiteAdministratifCreateClone.referenceEntiteAdministratif
              && bcb.budgetEntiteAdministratifVo.budgetSousProjetVo.referenceSousProjet==this._budgetSousProjetCreateClone2.referenceSousProjet)!=-1) {
      Swal({
        type: 'error',
        title: 'Avertissement',
        text: 'Ce compte budgitaire déja existe!'
      });
    }*/ else {
      this._budgetFaculteCreate.budgetSousProjetVo.forEach(bsp => {
        if (bsp.referenceSousProjet == this._budgetSousProjetCreateClone2.referenceSousProjet) {
          if (bsp.budgetEntiteAdministratifVo == null) bsp.budgetEntiteAdministratifVo = [];
          if (bsp.budgetEntiteAdministratifVo.findIndex(bea => bea.referenceEntiteAdministratif == this._budgetEntiteAdministratifCreateClone.referenceEntiteAdministratif) == -1) {
            bsp.budgetEntiteAdministratifVo.push(this._beas.find(bea => bea.referenceEntiteAdministratif == this._budgetEntiteAdministratifCreateClone.referenceEntiteAdministratif
              && bea.budgetSousProjetVo.referenceSousProjet == this._budgetSousProjetCreateClone2.referenceSousProjet));
          }
          let beaFind: BudgetEntiteAdministratifVo = bsp.budgetEntiteAdministratifVo.find(bea => bea.referenceEntiteAdministratif == this._budgetEntiteAdministratifCreateClone.referenceEntiteAdministratif);
          //bsp.budgetEntiteAdministratifVo.forEach(bea => {
          //if (bea.referenceEntiteAdministratif == this._budgetEntiteAdministratifCreateClone.referenceEntiteAdministratif) {
          let bcbClone: BudgetCompteBudgitaireVo = new BudgetCompteBudgitaireVo();
          bcbClone.detaillesBudgetVo = this._detaillesBudgetVo3;
          bcbClone.compteBudgitaireVo = this._compteBudgitaireCreate;
          //bcbClone.budgetEntiteAdministratifVo=bea;
          this._bcbs.push(bcbClone);
          if (beaFind.budgetCompteBudgitaireVo == null) {
            beaFind.budgetCompteBudgitaireVo = [];
          }
          beaFind.budgetCompteBudgitaireVo.push(bcbClone);
          console.log(beaFind);
          //bcbClone=new BudgetCompteBudgitaire();
          this._detaillesBudgetVo3 = new DetaillesBudget();
          this._compteBudgitaireCreate = new CompteBudgitaireVo();
          //}
          //});
        }
      });
    }
  }

  //permet de sauvegarder l'objet tout entier
  public saveAllInBudgetFaculte() {
    this.http.post<BudgetFaculteVo>(this._url_bf, this._budgetFaculteCreate).subscribe(
      data => {
        if (data != null) {
          this.refreshAllFromBf();
          Swal({
            type: 'success',
            title: 'Saved',
            text: 'Saved successfully!'
          });
          console.log('Ok');
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  /* DELETE: delete the budgetFaculte from the server */
  public deleteBudgetFaculte(annee: number) {
    Swal({
      title: 'Etes-vous sure?',
      text: 'Vous ne pouvez pas revenir en arrière!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer!'
    }).then((result) => {
      if (result.value) {
        if (annee != null) {
          this.http.delete(this._url_bf + 'annee/' + annee).subscribe(
            data => {
              this.refreshAllFromBf();
            }, error => {
              console.log(error);
            }
          );
        }
        Swal(
          'Supprimmé!',
          'Vos données ont été supprimés.',
          'success'
        );
      }
    });
  }

  /* DELETE: delete the budget sous projet from the server */
  public deleteBudgetSousProjet(bsp:BudgetSousProjetVo) {
    console.log(bsp);
    if (bsp.id == 0) {
      const index: number = this._budgetFaculteCreate.budgetSousProjetVo.indexOf(bsp);
      if (index !== -1) {
        this._budgetFaculteCreate.budgetSousProjetVo.splice(index, 1);
      }
    } else {
      Swal({
        title: 'Etes-vous sure?',
        text: 'Vous ne pouvez pas revenir en arrière!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui, supprimer!'
      }).then((result) => {
        if (result.value) {
          this.http.delete(this._url_bsp + 'referenceSousProjet/' + bsp.referenceSousProjet + '/annee/' + bsp.budgetFaculteVo.annee).subscribe(
            data => {
              if (this._budgetSousProjetCreate.referenceSousProjet == '') {
                this.findAllByAnnee();
              } else if (this._budgetEntiteAdministratifCreate.referenceEntiteAdministratif == '') {
                this.findAllByAnneeAndBudgetSousProjet();
              } else {
                this.findAllByAnneeAndBudgetSousProjetAndBudgetEntitiAdmin();
              }
            }, error => {
              console.log(error);
            }
          );
          Swal(
            'Supprimmé!',
            'Vos données ont été supprimés.',
            'success'
          );
        }
      });
    }
  }

  /* DELETE: delete the budget sous entite administratif from the server */
  public deleteBudgetEntiteAdmin(bea: BudgetEntiteAdministratifVo) {
    if (bea.id == 0) {
      const index: number = this._beas.indexOf(bea);
      if (index !== -1) {
        this._beas.splice(index, 1);
      }
    } else {
      Swal({
        title: 'Etes-vous sure?',
        text: 'Vous ne pouvez pas revenir en arrière!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui, supprimer!'
      }).then((result) => {
        if (result.value) {
          this.http.delete(this._url_bea + 'referenceEntiteAdmin/' + bea.referenceEntiteAdministratif + '/referenceSousProjet/' + bea.budgetSousProjetVo.referenceSousProjet + '/annee/' + bea.budgetSousProjetVo.budgetFaculteVo.annee).subscribe(
            data => {
              if (this._budgetSousProjetCreate.referenceSousProjet == null) {
                this.findAllByAnnee();
              } else if (this._budgetEntiteAdministratifCreate.referenceEntiteAdministratif == null) {
                this.findAllByAnneeAndBudgetSousProjet();
              } else {
                this.findAllByAnneeAndBudgetSousProjetAndBudgetEntitiAdmin();
              }
            }, error => {
              console.log(error);
            }
          );
          Swal(
            'Supprimmé!',
            'Vos données ont été supprimés.',
            'success'
          );
        }
      });
    }
  }

  /* DELETE: delete the budget budget compte cudgitaire from the server */
  public deleteBudgetCompteBudgitaire(bcb: BudgetCompteBudgitaireVo) {
    if (bcb.id == 0) {
      const index: number = this._bcbs.indexOf(bcb);
      if (index !== -1) {
        this._bcbs.splice(index, 1);
      }
    } else {
      Swal({
        title: 'Etes-vous sure?',
        text: 'Vous ne pouvez pas revenir en arrière!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui, supprimer!'
      }).then((result) => {
        if (result.value) {
          this.http.delete(this._url_bcb + 'referenceCompteBudgitaire/' + bcb.referenceCompteBudgitaire).subscribe(
            data => {
              if (this._budgetSousProjetCreate.referenceSousProjet == null) {
                this.findAllByAnnee();
              } else if (this._budgetEntiteAdministratifCreate.referenceEntiteAdministratif == null) {
                this.findAllByAnneeAndBudgetSousProjet();
              } else {
                this.findAllByAnneeAndBudgetSousProjetAndBudgetEntitiAdmin();
              }
            }, error => {
              console.log(error);
            }
          );
          Swal(
            'Supprimmé!',
            'Vos données ont été supprimés.',
            'success'
          );
        }
      });
    }
  }

  //find By creteria annee
  public findAllByAnnee() {
    if (this._budgetFaculteCreate == null || this._budgetFaculteCreate.annee>(new Date().getFullYear())) {
      Swal({
        type: 'error',
        title: 'Merci de saisir une année valide',
        text: 'Infos saisies invalide!'
      });
    } else {
      this.http.get<BudgetFaculteVo>(this._url_bf + 'annee/' + this._budgetFaculteCreate.annee).subscribe(
        data => {
          if (data != null) {
            this._budgetFacultes = [];
            this._budgetFacultes.push(data);
            this._budgetFaculteCreate = data;
            this._budgetFaculteCreate.budgetSousProjetVo = [];
          } else {
            Swal({
              type: 'error',
              title: 'Aucun informations trouvés',
              text: 'Something went wrong!'
            });
            this._budgetFacultes = [];
          }
        }, error => {
          Swal({
            type: 'warning',
            title: 'Le serveur est implanté',
            text: 'Something went wrong!'
          });
          console.log(error);
        }
      );
      this.http.get<Array<BudgetSousProjetVo>>(this._url_bsp + 'annee/' + this._budgetFaculteCreate.annee).subscribe(
        data => {
          if (data != null) {
            this._budgetFaculteCreate.budgetSousProjetVo = data;
            //this._budgetFaculteCreate.budgetSousProjetVo=data;
          }
        }, error => {
          console.log(error);
        }
      );
      this.http.get<Array<BudgetEntiteAdministratifVo>>(this._url_bea + 'annee/' + this._budgetFaculteCreate.annee).subscribe(
        data => {
          if (data != null) {
            this._beas = [];
            this._beas = data;
          }
        }, error => {
          console.log(error);
        }
      );
      this.http.get<Array<BudgetCompteBudgitaireVo>>(this._url_bcb + 'annee/' + this._budgetFaculteCreate.annee).subscribe(
        data => {
          if (data != null) {
            this._bcbs = [];
            this._bcbs = data;
          }
        }, error => {
          console.log(error);
        }
      );
    }
  }

  // find by annee et RefSousProjet
  public findAllByAnneeAndBudgetSousProjet() {
    if (this.budgetFaculteCreate != null && this._budgetSousProjetCreate != null) {
      this.http.get<BudgetSousProjetVo>(this._url_bsp + 'reference/' + this._budgetSousProjetCreate.referenceSousProjet + '/annee/' + this._budgetFaculteCreate.annee).subscribe(
        data => {
          if (data!=null){
            this._budgetFaculteCreate.budgetSousProjetVo = [];
            this._budgetFaculteCreate.budgetSousProjetVo.push(data);
          }else{
            Swal({
              type: 'error',
              title: 'Aucun informations trouvés',
              text: 'Something went wrong!'
            });
          }
        }, error => {
          console.log(error);
        }
      );
      this.http.get<Array<BudgetEntiteAdministratifVo>>(this._url_bea + 'refSousProjet/' + this._budgetSousProjetCreate.referenceSousProjet + '/annee/' + this._budgetFaculteCreate.annee).subscribe(
        data => {
          if (data!=null){
            this._beas = [];
            this._beas = data;
          }
        }, error => {
          console.log(error);
        }
      );
      this.http.get<Array<BudgetCompteBudgitaireVo>>(this._url_bcb + 'reference/' + this._budgetSousProjetCreate.referenceSousProjet + '/annee/' + this._budgetFaculteCreate.annee).subscribe(
        data => {
          if (data!=null){
            this._bcbs = [];
            this._bcbs = data;
          }
        }, error => {
          console.log(error);
        }
      );
    }
  }

  //find by Annee et refSousProjet et refEntitéAdministratif
  public findAllByAnneeAndBudgetSousProjetAndBudgetEntitiAdmin() {
    if (this._budgetEntiteAdministratifCreate != null && this._budgetSousProjetCreate.referenceSousProjet != null && this._budgetFaculteCreate != null) {
      this.http.get<BudgetEntiteAdministratifVo>(this._url_bea + 'referenceEntiteAdmin/' + this._budgetEntiteAdministratifCreate.referenceEntiteAdministratif + '/refSousProjet/' + this._budgetSousProjetCreate.referenceSousProjet + '/annee/' + this._budgetFaculteCreate.annee).subscribe(
        data => {
          if (data!=null){
            this._beas=[];
            this._beas.push(data);
          } else{
            Swal({
              type: 'error',
              title: 'Aucun informations trouvés',
              text: 'Something went wrong!'
            });
          }
        }, error => {
          console.log(error);
        }
      );
      this.http.get<Array<BudgetCompteBudgitaireVo>>(this._url_bcb + 'refEntite/' + this._budgetEntiteAdministratifCreate.referenceEntiteAdministratif + '/refsousProjet/' + this._budgetSousProjetCreate.referenceSousProjet + '/annee/' + this._budgetFaculteCreate.annee).subscribe(
        data => {
          if (data!=null){
            this._bcbs=[];
            this._bcbs = data;
          }
        }, error => {
          console.log(error);
        }
      );
    }
  }

  //find all info by annee min and annee max
  public findAllByAnneeMinAndAnneeMax(){
       this.http.get<Array<BudgetFaculteVo>>(this._url_bf+"anneeMin/"+this.budgetFaculteCreate.annee+"/anneeMax/"+this.budgetFaculteCreate1.annee).subscribe(
        data=>{
          if (data!=null){
            this._budgetFacultes = [];
            this._budgetFacultes = data;
          } else{
            Swal({
              type: 'error',
              title: 'Aucun informations trouvés',
              text: 'Something went wrong!'
            });
            this._budgetFacultes = [];
          }
          console.log("Data between found");
        },error1 => {
          console.log("No data between");
        }
      );
     this.http.get<Array<BudgetSousProjetVo>>(this._url_bsp+"anneeMin/"+this.budgetFaculteCreate.annee+"/anneeMax/"+this.budgetFaculteCreate1.annee).subscribe(
      data=>{
        if (data!=null){
          this._budgetFaculteCreate.budgetSousProjetVo = [];
          this._budgetFaculteCreate.budgetSousProjetVo = data;
        }
      },error1 => {
        console.log(error1);
      }
    );

    this.http.get<Array<BudgetEntiteAdministratifVo>>(this._url_bea+"anneeMin/"+this.budgetFaculteCreate.annee+"/anneeMax/"+this.budgetFaculteCreate1.annee).subscribe(
      data=>{
        if (data!=null){
          this._beas=[];
          this._beas=data;
        }
      },error => {
        console.log(error);
      }
    );

    this.http.get<Array<BudgetCompteBudgitaireVo>>(this._url_bcb+"anneeMin/"+this.budgetFaculteCreate.annee+"/anneeMax/"+this.budgetFaculteCreate1.annee).subscribe(
      data=>{
        if (data!=null) {
          this._bcbs=[];
          this._bcbs=data;
        }
      },error => {
        console.log(error);
      }
    );
  }

  //permet de rafraichair les champs en se basant sur l'objet supprimmé
  public refreshAllFromBf(){
    this._budgetFaculteCreate = new BudgetFaculteVo();
    this._budgetFacultes = [];
    this._budgetFaculteCreate.budgetSousProjetVo = [];
    this._beas = [];
    this._bcbs = [];
  }

  //update budget sous projet
  public updateBudgetSousProjet(refSousProjet:string){
    this._budgetFaculteCreate.budgetSousProjetVo.forEach(bsp => {
      if (bsp.referenceSousProjet==refSousProjet){
        const id = bsp.detaillesBudgetVo.id;
        bsp.detaillesBudgetVo = this._detaillesBudgetVo1;
        bsp.detaillesBudgetVo.id = id;
        let budgetSousProjetClone: BudgetSousProjetVo = new BudgetSousProjetVo(bsp.id, refSousProjet);
        budgetSousProjetClone.detaillesBudgetVo = bsp.detaillesBudgetVo;
        //console.log(budgetSousProjetClone);
        let sousprojet = this._budgetFaculteCreate.budgetSousProjetVo.find(bsp => bsp.referenceSousProjet == refSousProjet);
        sousprojet = budgetSousProjetClone;
        this._detaillesBudgetVo1 = new DetaillesBudget();
        console.log(this._budgetFaculteCreate);
      }
    });
  }

  //update budget sous projet
  public updateBudgetEntiteAdministratif(refEntiteAdministratif:string){
    this._beas.forEach(bea=>{
      if (bea.referenceEntiteAdministratif==refEntiteAdministratif){
        const id = bea.detaillesBudgetVo.id;
        bea.detaillesBudgetVo = this._detaillesBudgetVo2;
        bea.detaillesBudgetVo.id = id;
        //console.log(this._budgetFaculteCreate.budgetSousProjetVo.indexOf(bea.budgetSousProjetVo));
        this._budgetFaculteCreate.budgetSousProjetVo.forEach(bsp => {
          if (bsp.referenceSousProjet == bea.budgetSousProjetVo.referenceSousProjet) {
            if (bsp.budgetEntiteAdministratifVo == null) {
              bsp.budgetEntiteAdministratifVo = [];
            }
            let budgetEntiteAdminClone: BudgetEntiteAdministratifVo = new BudgetEntiteAdministratifVo(bea.id, refEntiteAdministratif);
            budgetEntiteAdminClone.detaillesBudgetVo = bea.detaillesBudgetVo;
            let entiteadminstratif = bsp.budgetEntiteAdministratifVo.find(ea => ea.referenceEntiteAdministratif == refEntiteAdministratif);
            if (entiteadminstratif == null) {
              bsp.budgetEntiteAdministratifVo.push(budgetEntiteAdminClone);
            } else {
              entiteadminstratif = budgetEntiteAdminClone;
            }
            console.log(this._budgetFaculteCreate);
          }
        });
        this._detaillesBudgetVo2 = new DetaillesBudget();
      }
    });
  }

  public updateBudgetCompteBudgitaire(refCompteBudgitaire:string){
    this._bcbs.forEach(bcb=>{
      if (bcb.referenceCompteBudgitaire==refCompteBudgitaire){
        const id = bcb.detaillesBudgetVo.id;
        bcb.detaillesBudgetVo = this._detaillesBudgetVo3;
        bcb.detaillesBudgetVo.id = id;
        //bcb.compteBudgitaireVo=this._compteBudgitaireCreate;
        this._budgetFaculteCreate.budgetSousProjetVo.forEach(bsp => {
          if (bsp.referenceSousProjet == bcb.budgetEntiteAdministratifVo.budgetSousProjetVo.referenceSousProjet) {
            if (bsp.budgetEntiteAdministratifVo === null) {
              bsp.budgetEntiteAdministratifVo = [];
            }
            if (bsp.budgetEntiteAdministratifVo.findIndex(bea => bea.referenceEntiteAdministratif == bcb.budgetEntiteAdministratifVo.referenceEntiteAdministratif) == -1) {
              bsp.budgetEntiteAdministratifVo.push(bcb.budgetEntiteAdministratifVo);
            }
            bsp.budgetEntiteAdministratifVo.forEach(bea => {
              if (bea.referenceEntiteAdministratif == bcb.budgetEntiteAdministratifVo.referenceEntiteAdministratif) {
                let budgetCompteBudgitaireClone: BudgetCompteBudgitaireVo = new BudgetCompteBudgitaireVo(bcb.id, bcb.referenceCompteBudgitaire);
                budgetCompteBudgitaireClone.detaillesBudgetVo = this._detaillesBudgetVo3;
                budgetCompteBudgitaireClone.detaillesBudgetVo.id = id;
                //budgetCompteBudgitaireClone.compteBudgitaireVo=this._compteBudgitaireCreate;
                if (bea.budgetCompteBudgitaireVo == null) {
                  bea.budgetCompteBudgitaireVo = [];
                }
                bea.budgetCompteBudgitaireVo.push(budgetCompteBudgitaireClone);
                console.log(this._budgetFaculteCreate);
                //console.log(bsp.budgetEntiteAdministratifVo);
                //if (beaFind.budgetCompteBudgitaireVo==null){beaFind.budgetCompteBudgitaireVo=[];}
                //console.log(beaFind);
                //beaFind.budgetCompteBudgitaireVo.push(budgetCompteBudgitaireClone);
                //console.log(this._budgetFaculteCreate);
              }
            });
          }
        });
        this._detaillesBudgetVo3 = new DetaillesBudget();
        //this._compteBudgitaireCreate=new CompteBudgitaireVo();
      }
    });
  }

  public selectedBsp(bsp:BudgetSousProjetVo){
    this._selectdeBudgetSp = bsp;
  }
}
