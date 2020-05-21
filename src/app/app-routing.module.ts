import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CovidComponent } from "../app/component/covid/covid.component";

const routes: Routes = [
  {
    path: "",
    component: CovidComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
