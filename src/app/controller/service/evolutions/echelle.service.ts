import {Injectable} from '@angular/core';
import {Echelle} from '../../model/evolution/echelle.model';
import {HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';
import {getReact} from './Util/SwalReact';

@Injectable({
  providedIn: 'root'
})
export class EchelleService {

  private SWAL_REACT = getReact('Echelle', true);
  private SUCCESS_SUCCESS_CREATE = this.SWAL_REACT.SUCCESS_CREATE;
  private SUCCESS_SUCCESS_EDIT = this.SWAL_REACT.SUCCESS_EDIT;
  private SUCCESS_SUCCESS_DELETE = this.SWAL_REACT.SUCCESS_DELETE;
  private ERROR_REF_ALREADY_EXISTS = this.SWAL_REACT.ERROR_REF_ALREADY_EXISTS;
  private ERROR_REF_DOES_NOT_EXIST = this.SWAL_REACT.ERROR_REF_DOES_NOT_EXIST;
  private ERROR_INVALID_REF = this.SWAL_REACT.ERROR_INVALID_REF;
  private ERROR_NOT_ENOUGH_DATA = this.SWAL_REACT.ERROR_NOT_ENOUGH_DATA;
  private ERROR_UNKNOWN_ERROR = this.SWAL_REACT.ERROR_UNKNOWN_ERROR;

  private _url = 'http://localhost:8099/evolution/echelle/';

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  private _echelle: Echelle = new Echelle('', '', 0, '', null, '');
  private _echelles: Array<Echelle>;

  get echelle(): Echelle {
    return this._echelle;
  }

  set echelle(value: Echelle) {
    this._echelle = value;
  }

  constructor(private http: HttpClient) {
    this.getEchellesFromDatabase();
  }

  get echelles(): Array<Echelle> {
    return this._echelles;
  }

  set echelles(value: Array<Echelle>) {
    this._echelles = value;
  }

  ajouterEchelle() {
    this.http.post(this._url, this._echelle).subscribe(
      res => {
        if (res == -1) {
          // @ts-ignore
          Swal(this.ERROR_NOT_ENOUGH_DATA);
        } else if (res == -2) {
          // @ts-ignore
          Swal(this.ERROR_REF_ALREADY_EXISTS);
        } else if (res == 1) {
          this._echelles.push(this._echelle);
          // @ts-ignore
          Swal(this.SUCCESS_SUCCESS_CREATE);
        } else {
          // @ts-ignore
          Swal(this.ERROR_UNKNOWN_ERROR);
        }
      });
  }


  public getEchellesFromDatabase() {
    this.http.get<Echelle>(this._url + 'all').subscribe(
      res => {
        // @ts-ignore
        this._echelles = res;
      }
    );
  }

  public editEchelle(data){
    this.http.put(this._url + 'edit', data).subscribe(
      (res) => {
        if (res == -1) {
          Swal(this.ERROR_NOT_ENOUGH_DATA);
        } else if (res == -2) {
          Swal(this.ERROR_REF_DOES_NOT_EXIST);
        } else if (res == 1) {
          this.getEchellesFromDatabase();
          Swal(this.SUCCESS_SUCCESS_EDIT);
        } else {
          Swal(this.ERROR_UNKNOWN_ERROR);
        }
      });
  }

  deleteEchelle(data){
    this.http.delete(this._url + 'delete/' + data).subscribe(
      (res) => {
        if (res == -1) {
          Swal(this.ERROR_INVALID_REF);
        } else if (res == -2) {
          Swal(this.ERROR_REF_DOES_NOT_EXIST);
        } else if (res == 1) {
          this.getEchellesFromDatabase();
          Swal(this.SUCCESS_SUCCESS_DELETE);
        } else {
          Swal(this.ERROR_UNKNOWN_ERROR);
        }
      });
  }
}
