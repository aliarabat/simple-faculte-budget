import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';
import {Echelon} from '../../model/evolution/echelon.model';
import {getReact} from './Util/SwalReact';

@Injectable({
  providedIn: 'root'
})
export class EchelonService {
  private SWAL_REACT = getReact('Echelon', false);
  private SUCCESS_SUCCESS_CREATE = this.SWAL_REACT.SUCCESS_CREATE;
  private SUCCESS_SUCCESS_EDIT = this.SWAL_REACT.SUCCESS_EDIT;
  private SUCCESS_SUCCESS_DELETE = this.SWAL_REACT.SUCCESS_DELETE;
  private ERROR_REF_ALREADY_EXISTS = this.SWAL_REACT.ERROR_REF_ALREADY_EXISTS;
  private ERROR_REF_DOES_NOT_EXIST = this.SWAL_REACT.ERROR_REF_DOES_NOT_EXIST;
  private ERROR_INVALID_REF = this.SWAL_REACT.ERROR_INVALID_REF;
  private ERROR_NOT_ENOUGH_DATA = this.SWAL_REACT.ERROR_NOT_ENOUGH_DATA;
  private ERROR_UNKNOWN_ERROR = this.SWAL_REACT.ERROR_UNKNOWN_ERROR;

  private _url = 'http://localhost:8099/evolution/echelon/';

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  private _echelon = new Echelon('', 0, '');
  private _newEchelon = new Echelon('', 0, '');

  get echelon(): Echelon {
    return this._echelon;
  }

  set echelon(value: Echelon) {
    this._echelon = value;
  }

  private _echelons = [];

  get newEchelon(): Echelon {
    return this._newEchelon;
  }

  set newEchelon(value: Echelon) {
    this._newEchelon = value;
  }

  constructor(private http: HttpClient) {
    this.getEchelonsFromDatabase();
  }

  get echelons(): Echelon[] {
    return this._echelons;
  }

  set echelons(value: Echelon[]) {
    this._echelons = value;
  }

  public ajouterEchelon() {
    let echelonClone = new Echelon(this._echelon.reference, this._echelon.ordre, this._echelon.libelle);
    this._echelons.push(echelonClone);
    this.http.post(this._url, echelonClone).subscribe(
      (res) => {
        if (res == -1) {
          Swal(this.ERROR_NOT_ENOUGH_DATA);
        } else if (res == -2) {
          Swal(this.ERROR_REF_ALREADY_EXISTS);
        } else if (res == 1) {
          Swal(this.SUCCESS_SUCCESS_CREATE);
        } else {
          Swal(this.ERROR_UNKNOWN_ERROR);
        }
      });

  }


  public getEchelonsFromDatabase() {
    this.http.get<Echelon>(this._url + 'all').subscribe(
      res => {
        // @ts-ignore
        this._echelons = res;
      }
    );
  }

  public modifierEchelon(data) {
    this.http.put(this._url + 'edit', data).subscribe(
      (res) => {
        if (res == -1) {
          Swal(this.ERROR_NOT_ENOUGH_DATA);
        } else if (res == -2) {
          Swal(this.ERROR_REF_DOES_NOT_EXIST);
        } else if (res == 1) {
          Swal(this.SUCCESS_SUCCESS_EDIT);
        } else {
          Swal(this.ERROR_UNKNOWN_ERROR);
        }
      });

  }

  supprimerEchelon(data) {
    this.http.delete(this._url + 'delete/' + data).subscribe(
      (res) => {
        if (res == -1) {
          Swal(this.ERROR_INVALID_REF);
        } else if (res == -2) {
          Swal(this.ERROR_REF_DOES_NOT_EXIST);
        } else if (res == 1) {
          Swal(this.SUCCESS_SUCCESS_DELETE);
          this.getEchelonsFromDatabase();
        } else {
          Swal(this.ERROR_UNKNOWN_ERROR);
        }
      });
  }
}
