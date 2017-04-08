import { MainComponent } from "./pages/main/main.component";
import { CustomviewComponent } from "./pages/customview/customview.component";

export const routes = [
  { path: "", component: MainComponent },
  {path: "customview", component: CustomviewComponent}
];

export const navigatableComponents = [
  MainComponent, CustomviewComponent
];