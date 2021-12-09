import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faTh,
  faNewspaper,
  faMapMarked,
  faVideo,
  faImages,
  faEllipsisV,
  faAngleUp,
  faShareAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSearch);
library.add(faTh);
library.add(faNewspaper);
library.add(faMapMarked);
library.add(faVideo);
library.add(faImages);
library.add(faEllipsisV);
library.add(faAngleUp);
library.add(faShareAlt);

const app = createApp(App);

app.component("FontAwesomeIcon", FontAwesomeIcon);

app.mount("#app");
