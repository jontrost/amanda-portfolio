import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "project/:project",
        pathMatch: "full",
        loadComponent: () => import("./pages/project-details/project-details.component")
    },
    {
        path: "",
        pathMatch: "full",
        loadComponent: () => import("./pages/landing/landing.component")
    },
    {
        path: "**",
        redirectTo: ""
    }
];
