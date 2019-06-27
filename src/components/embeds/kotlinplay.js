import React from "react";
import css from "@emotion/css";

const KotlinPlayground = ({ src, height }) => (
  <iframe 
    title={`Kotlin Playground (${src})`}
    height={ height || 180} 
    width="100%" 
    src={ src.startsWith("http") ? src : `https://pl.kotl.in/${src}?theme=darcula`} 
    css={css`border: none;`}
  >
  </iframe>
);

export default KotlinPlayground;