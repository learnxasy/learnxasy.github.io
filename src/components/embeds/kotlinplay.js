import React from "react";

const KotlinPlayground = ({ src, height }) => (
  <iframe 
    title={`Kotlin Playground (${src})`}
    height={ height || 180} 
    width="100%" 
    src={ src.startsWith("http") ? src : `https://pl.kotl.in/${src}?theme=darcula`} 
    scrolling="no" 
    frameborder="no" 
    allowtransparency="true"
  >
  </iframe>
);

export default KotlinPlayground;