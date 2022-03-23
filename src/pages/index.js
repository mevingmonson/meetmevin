import React from "react";
import Layout from "./../components/Layout";
import XA from "components/ExternalAnchor";

const Index = () => (
  <Layout>
    <h2>Howdy.</h2>
    <p>
      My name is Mevin and I make things on the web. I am passionate about
      building good-looking web applications with a primary focus on performance
      and future maintainability. React.js is my primary weapon. Therewithal
      I've keen interest in Blockchain and Web 3.0
    </p>
    <p>
      In my free time, I enjoy playing piano, badminton and backpacking once in
      a while.
    </p>
    <p>
      You can find me on{" "}
      <XA href="https://twitter.com/mevingmonson">Twitter</XA>,{" "}
      <XA href="https://github.com/mevingmonson">Github</XA>,
      <XA href="https://www.linkedin.com/in/mevingmonson/"> LinkedIn</XA>, and{" "}
      <XA href="https://open.spotify.com/user/mevingmonson">Spotify</XA>, or
      reach me via <XA href="mailto:mevingmonson@gmail.com">email</XA>.
    </p>
    <h2>Colophon</h2>
    <p>
      The credits for this excellent template goes to{" "}
      <XA href="https://twitter.com/prestonrichey">Preston Richey</XA>. This
      site was made with <XA href="https://www.gatsbyjs.org/">Gatsby.js</XA> and
      is hosted on <XA href="https://www.netlify.com/">Netlify</XA>. You can
      look at its code{" "}
      <XA href="https://github.com/mevingmonson/meetmevin">here</XA>. The
      monospace font is{" "}
      <XA href="https://fonts.google.com/specimen/IBM+Plex+Mono">
        IBM Plex Mono
      </XA>{" "}
      and the sans-serif is{" "}
      <XA href="https://fonts.google.com/specimen/Rubik">Rubik</XA>.
    </p>
  </Layout>
);

export default Index;
