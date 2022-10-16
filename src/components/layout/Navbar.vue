<template>
  <div>
    <Nav>
      <div class="nft-logo-box">
        <div class="nft-logo">
          <div class="nft-logo-circle"></div>
        </div>
        <span class="nft-logo-text">CryptoKet</span>
      </div>

      <div>
        <b-form-input
          type="search"
          placeholder="Search Item Here"
          class="nft-navbar-input"
        ></b-form-input>
      </div>
      <ul class="nft-menu-link">
        <li v-for="(item, index) in menuLinks" :key="index">
          <router-link
            :class="{ 'nft-router-active': item.name == $route.name }"
            exact
            :to="item.route"
            >{{ item.name }}</router-link
          >
        </li>
      </ul>
      <div class="nft-button-box">
        <b-button variant="success">Create</b-button>
        <b-button variant="outline-primary">Connect</b-button>
      </div>
    </Nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuLinks: [
        { name: "Explore", route: "/" },
        { name: "My Items", route: "/" },
        { name: "Following", route: "/" },
      ],
    };
  },
};
</script>
<style scoped>
Nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 40px;
}
.nft-logo-box {
  position: relative;
  display: flex;
  align-items: center;
}
.nft-logo {
  width: 32px;
  height: 32px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    101.12deg,
    #eb1484 27.35%,
    #c91cc3 99.99%,
    #c81cc5 100%,
    #c81cc5 100%
  );
}
.nft-logo-circle {
  width: 18px;
  height: 18px;
  border: 2px solid #1b1a21;
  border-radius: 10px;
}

.nft-logo-text {
  margin: 0 20px 0 5px;
  font-weight: 700;
  color: #ffffff;
  font-size: 1rem;
}

.nft-menu-link {
  margin: 0;
}
.nft-menu-link li {
  display: inline-block;
  margin: 0 10px;
}
.nft-menu-link li a {
  font-size: 1rem;
  font-weight: 600;
  color: #4f4f4f;
}
.nft-button-box button {
  margin: 0 4px;
}
.nft-button-box button:nth-child(1) {
  background: linear-gradient(
    101.12deg,
    #eb1484 27.35%,
    #c91cc3 99.99%,
    #c81cc5 100%,
    #c81cc5 100%
  );
  border-radius: 10px;
  border: none;
}
.nft-button-box button:nth-child(2) {
  border-color: #da18a3;
  color: #da18a3;
}
.nft-button-box button:hover {
  background-color: inherit !important;
}

.nft-navbar-input {
  background-color: #000;
  border: none;
  color: #fff !important;
  width: 625px;
}
.nft-navbar-input:focus {
  background-color: #000;
}
.nft-navbar-input::placeholder {
  color: #fff;
}
.nft-router-active {
  color: #fff !important;
}
</style>
