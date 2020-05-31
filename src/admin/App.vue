<template lang="pug">
  .admin-wrapper
   AdminHeader
   router-view

</template>

<script>
  import AdminHeader from "./components/AdminHeader";
  import Login from "./components/Pages/Login";
  import About from "./components/Pages/About";
  import Works from "./components/Pages/Works";
  import Reviews from "./components/Pages/Reviews";
  import Messages from "./components/Messages";
  export default {
    name: 'App',
    components: {
      Messages,
      Reviews,
      Works,
      About,
      Login,
      AdminHeader

    }
  }

</script>

<style scoped lang="postcss">
  //- Base styles =====================================================
  @mixin desktopHd() {
    @media screen and (max-width: $bp-desktop-hd) {
      @content ;
    }
  }
  @mixin desktopBig() {
    @media screen and (max-width: $bp-desktop-big) {
      @content ;
    }
  }
  @mixin desktop() {
    @media screen and (max-width: $bp-desktop) {
      @content ;
    }
  }
  @mixin tabletsBig() {
    @media screen and (max-width: $bp-tablets-big) {
      @content ;
    }
  }
  @mixin tablets() {
    @media screen and (max-width: $bp-tablets) {
      @content ;
    }
  }
  @mixin phones() {
    @media screen and (max-width: $bp-phones) {
      @content ;
    }
  }
  html {
    @include desktop {
      font-size: 15px;
    }
    @include tablets {
      font-size: 14px;
    }
  }

  .logo-web {
    fill: $text-color;
  }

  .logo-xenia {
    fill: $yellow-color;
  }

  .admin-wrapper {
    overflow: hidden;
    min-height: 100%;
    position: relative;
    font-family: 'Open Sans', Helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.42;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $text-color;
    margin: 0 auto;
  //width: 1800px;

  }

  button {
    border: 0;
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  button[type="button"] {
    cursor: pointer;
  }

  a {
    color: inherit;
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }

</style>
