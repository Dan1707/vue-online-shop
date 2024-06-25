import { App } from "vue";

interface Component {
  name: string;
  component: any;
}

const components: Component[] = [];

const plugin = {
  install: (app: App<Element>) => {
    components.forEach(({ name, component }) => {
      app.component(name, component);
    });
  },
};

export default plugin;
