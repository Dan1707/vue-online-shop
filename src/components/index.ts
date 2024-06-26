import { App } from "vue";
import ShopHeader from "./header/ShopHeader.vue";
import ShopLogo from "./header/ShopLogo.vue";
import ShopForm from "./header/form/ShopForm.vue";
import ShopCategory from "./header/form/ShopCategory.vue";
import BtnNormal from "./ui/BtnNormal.vue";
import ShopNav from "./header/nav/ShopNav.vue";
import ShopNavItem from "./header/nav/ShopNavItem.vue";

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
];

const plugin = {
  install: (app: App<Element>) => {
    components.forEach(({ name, component }) => {
      app.component(name, component);
    });
  },
};

export default plugin;
