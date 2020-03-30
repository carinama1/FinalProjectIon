import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RoutesPage } from "./routes.page";

const routes: Routes = [
  {
    path: "home",
    component: RoutesPage,
    children: [
      {
        path: "",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../home/home.module").then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: ":type",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../home/home.module").then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesPageRoutingModule {}
