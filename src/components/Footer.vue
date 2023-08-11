<template>
  <footer class="footer">
    <div class="flex flex__justify-between flex-wrap">
      <div>
        <img src="../assets/pressone-logo.png" alt="logo" />
        <p>hello@pressone.africa</p>
        <p>+234 1 343 8962</p>
      </div>

      <div>
        <p class="footer__head">Company</p>
        <ul>
          <li>Help & Support</li>
          <li>About Us</li>
          <li>Product</li>
          <li>Media</li>
          <li>FAQs</li>
        </ul>
      </div>

      <div>
        <p class="footer__head">Address</p>
        <p>
          The Lennox Mall, 3 Admiralty Way
          <br />
          Lekki Phase 1, Lagos.
        </p>
      </div>
    </div>

    <div class="flex flex__justify-between">
      <ul>
        <li>© 2022 PressOne Africa</li>
        <li>All rights reserved</li>
      </ul>
      <ul>
        <li>Terms and agreemen</li>
        <li>Policy</li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style lang="scss" scoped>
.footer {
  background: #fef8e7;
  padding: 80px 200px;

  @media screen and (max-width: 768px) {
    padding: 50px 45px;
    width: 100%;
  }

  &__head {
    font-size: 24px;
    font-weight: 700;
  }
}
</style>
