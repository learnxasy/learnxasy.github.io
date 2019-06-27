import React from "react";
import RehypeReact from "rehype-react";

import KotlinPlayground from "./embeds/kotlinplay";

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    "kotlin-playground": KotlinPlayground
  }
}).Compiler;

export default renderAst;