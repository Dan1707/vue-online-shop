import { App } from "vue";
import ShopHeader from "./header/ShopHeader.vue";
import ShopLogo from "./ui/ShopLogo.vue";
import ShopForm from "./header/ShopForm.vue";
import ShopCategory from "./ui/ShopCategory.vue";
import BurgerMenu from "./ui/BurgerMenu.vue";
import ShopHeaderNav from "./header/ShopHeaderNav.vue";
import ShopTabletNav from "./header/responsive/ShopTabletNav.vue";
import ShopTabletInput from "./header/responsive/ShopTabletInput.vue";
import ShopTabletCategories from "./header/responsive/ShopTabletCategories.vue";
import ShopHero from "./hero/ShopHero.vue";
import ShopSale from "./sale/ShopSale.vue";
import ShopTime from "./sale/ShopTime.vue";
import ShopSaleItem from "./sale/ShopSaleItem.vue";
import ShopItemsBlock from "./items-block/ShopItemsBlock.vue";
import ShopSimpleItem from "./items-block/ShopSimpleItem.vue";
import Btn from "./ui/Btn.vue";

interface Component {
  name: string;
  component: any;
}

const components: Component[] = [
  { name: "ShopHeader", component: ShopHeader },
  { name: "ShopLogo", component: ShopLogo },
  { name: "ShopForm", component: ShopForm },
  { name: "ShopCategory", component: ShopCategory },
  { name: "ShopHeaderNav", component: ShopHeaderNav },
  { name: "ShopTabletNav", component: ShopTabletNav },
  { name: "BurgerMenu", component: BurgerMenu },
  { name: "ShopTabletInput", component: ShopTabletInput },
  { name: "ShopTabletCategories", component: ShopTabletCategories },
  { name: "ShopHero", component: ShopHero },
  { name: "ShopSale", component: ShopSale },
  { name: "ShopTime", component: ShopTime },
  { name: "ShopSaleItem", component: ShopSaleItem },
  { name: "ShopItemsBlock", component: ShopItemsBlock },
  { name: "ShopSimpleItem", component: ShopSimpleItem },
  { name: "Btn", component: Btn },
];

const plugin = {
  install: (app: App<Element>) => {
    components.forEach(({ name, component }) => {
      app.component(name, component);
    });
  },
};

export default plugin;
