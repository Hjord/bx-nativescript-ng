import { MainComponent } from "./pages/main/main.component";
import { CustomviewComponent } from "./pages/customview/customview.component";
import { CustompageComponent } from "./pages/custompage/custompage.component";

export const routes = [
  { path: "", component: MainComponent },
  {path: "customview", component: CustomviewComponent},
  {path: "custompage", component: CustompageComponent}
];

export const navigatableComponents = [
  MainComponent, CustomviewComponent, CustompageComponent
];