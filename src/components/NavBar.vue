<template>
  <nav class="nav" id="navbar">
    <img src="../assets/pressone-logo.png" alt="pressone logo" height="38" />
    <ul class="navbar">
      <li>About</li>
      <li>Pricing</li>
      <li>Pricing</li>
      <li>Support</li>
    </ul>
    <button class="navbar__button">Get PressOne</button>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
.nav {
  padding: 20px 10px;
  z-index: 100;
  display: flex;
  justify-content: space-around;
}
.navbar {
  display: flex;
  justify-content: space-between;

  &__button {
    padding: 14px 24px;
    border-radius: 4px;
    border: 1px solid #0e99d2;
    color: #0e99d2;

    @media screen and (max-width: 768px) {
      padding: 10px 16px;
    }
  }
}
ul {
  margin: 0px;
}
li {
  padding: 14px 36px;
  @media screen and (max-width: 768px) {
    padding: 14px;
  }
}
.sticky {
  position: fixed;
  background-color: #eaf1f6;
  top: 0;
  width: 100%;
}
</style>
