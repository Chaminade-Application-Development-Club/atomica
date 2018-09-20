import VueGAPI from "./VueGAPI";

function plugin(Vue: any, clientConfig: any) {
  Vue.use(VueGAPI, clientConfig);
}

// Install by default if using the script tag
const w: any = window;
if (typeof w !== "undefined" && w.Vue) {
  w.Vue.use(plugin);
}

export default plugin;
const version = "__VERSION__";
// Export all components too
export {
  version,
};
