import { App } from "vue";
import ShopHeader from "./header/ShopHeader.vue";
import ShopLogo from "./ui/ShopLogo.vue";
import ShopForm from "./header/ShopForm.vue";
import ShopCategory from "./ui/ShopCategory.vue";
import BtnNormal from "./ui/buttons/BtnNormal.vue";
import BtnLight from "./ui/buttons/BtnLight.vue";
import BurgerMenu from "./ui/BurgerMenu.vue";
import ShopHeaderNav from "./header/ShopHeaderNav.vue";
import ShopTabletNav from "./header/responsive/ShopTabletNav.vue";
import ShopTabletInput from "./header/responsive/ShopTabletInput.vue";
import ShopHeaderCategories from "./header/ShopHeaderCategories.vue";
import ShopTabletCategories from "./header/responsive/ShopTabletCategories.vue";
import ShopHero from "./hero/ShopHero.vue";

interface Component {
  name: string;
  component: any;
}

const components: Component[] = [
  { name: "ShopHeader", component: ShopHeader },
  { name: "ShopLogo", component: ShopLogo },
  { name: "ShopForm", component: ShopForm },
  { name: "BtnNormal", component: BtnNormal },
  { name: "BtnLight", component: BtnLight },
  { name: "ShopCategory", component: ShopCategory },
  { name: "ShopHeaderNav", component: ShopHeaderNav },
  { name: "ShopTabletNav", component: ShopTabletNav },
  { name: "BurgerMenu", component: BurgerMenu },
  { name: "ShopTabletInput", component: ShopTabletInput },
  { name: "ShopHeaderCategories", component: ShopHeaderCategories },
  { name: "ShopTabletCategories", component: ShopTabletCategories },
  { name: "ShopHero", component: ShopHero },
];

const plugin = {
  install: (app: App<Element>) => {
    components.forEach(({ name, component }) => {
      app.component(name, component);
    });
  },
};

export default plugin;
