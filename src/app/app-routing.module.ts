import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MagasinComponent} from "./magasin/magasin.component";
import {ReceptionComponent} from "./reception/reception.component";
import {ExpressionBesoinsComponent} from "./expression-besoins/expression-besoins.component";
import {BudgetComponent} from './budget/budget.component';
import {MentionsComponent} from './evaluation-personnel/mentions/mentions.component';
import {NotesComponent} from './evaluation-personnel/notes/notes.component';
import {ElementsComponent} from './evaluation-personnel/elements/elements.component';
import {EvaluationPersonnelComponent} from './evaluation-personnel/evaluation-personnel.component';
import {ProduitsComponent} from "./produits/produits.component";


const routes: Routes = [
  { path: 'exepressionbesoins', component:ExpressionBesoinsComponent},
  { path:'reception',component:ReceptionComponent},
  { path: 'magasin',component:MagasinComponent},
  { path: 'budget',component:BudgetComponent},

  { path: 'evaluation', component: EvaluationPersonnelComponent,
    children: [
      // { path: '', redirectTo: 'elements', pathMatch: 'full' },
      {path: 'elements', component: ElementsComponent, },

      {path: 'mentions', component: MentionsComponent},
      {path: 'notes', component: NotesComponent},
    ]


  } ,
  { path: 'Produit',component:ProduitsComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
