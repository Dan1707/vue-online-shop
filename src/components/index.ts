import { App } from "vue";
import ShopHeader from "./header/ShopHeader.vue";
import ShopLogo from "./header/ShopLogo.vue";
import ShopForm from "./header/form/ShopForm.vue";
import ShopCategory from "./header/form/ShopCategory.vue";
import BtnNormal from "./ui/BtnNormal.vue";
import BurgerMenu from "./ui/BurgerMenu.vue";
import ShopNav from "./header/nav/ShopNav.vue";
import ShopNavItem from "./header/nav/ShopNavItem.vue";
import ShopTabletNav from "./header/responsive/ShopTabletNav.vue";
import ShopTabletInput from "./header/responsive/ShopTabletInput.vue";

interface Component {
  name: string;
  component: any;
}

const components: Component[] = [
  { name: "ShopHeader", component: ShopHeader },
  { name: "ShopLogo", component: ShopLogo },
  { name: "ShopForm", component: ShopForm },
  { name: "BtnNormal", component: BtnNormal },
  { name: "ShopCategory", component: ShopCategory },
  { name: "ShopNav", component: ShopNav },
  { name: "ShopNavItem", component: ShopNavItem },
  { name: "ShopTabletNav", component: ShopTabletNav },
  { name: "BurgerMenu", component: BurgerMenu },
  { name: "ShopTabletInput", component: ShopTabletInput },
];

const plugin = {
  install: (app: App<Element>) => {
    components.forEach(({ name, component }) => {
      app.component(name, component);
    });
  },
};

export default plugin;
