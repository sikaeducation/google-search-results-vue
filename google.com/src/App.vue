<template>
  <div class="App">
    <AppHeader :profileImage="data.user.profileImage" />
    <main>
      <SearchResults
        :resultCount="data.resultCount"
        :searchTime="data.searchTime"
        :questions="data.questions"
        :searchResults="data.searchResults"
      />
      <SearchHighlights :knowledgePanel="data.knowledgePanel" />
    </main>
  </div>
</template>

<script>
import data from "./data";

import AppHeader from "./components/AppHeader";
import SearchResults from "./components/SearchResults";
import SearchHighlights from "./components/SearchHighlights";

export default {
  name: "App",
  components: {
    AppHeader,
    SearchResults,
    SearchHighlights
  },
  computed: {
    data() {
      return data;
    }
  }
};
</script>

<style lang="scss">
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  box-sizing: border-box;
}
img {
  max-width: 100%;
  max-height: 100%;
}
h2 {
  font-size: 28px;
  margin-bottom: 6px;
}
h3 {
  font-size: 18px;
  margin-bottom: 6px;
}
p {
  line-height: 1.5;
  font-size: 14px;
}
a {
  text-decoration: none;
}
.App {
  padding: 18px 0;
  font-family: Arial, sans-serif;
  color: hsl(0, 0%, 17%);
}
.App > main {
  width: 100%;
  display: grid;
  grid-template-columns: 130px 575px 1fr;
}
svg {
  margin-right: 12px;
  color: hsl(0, 0%, 50%);
}
</style>
