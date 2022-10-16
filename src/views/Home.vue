<template>
  <div>
    <section class="nft-banner">
      <div class="nft-banner-box">
        <div class="nft-banner-box-text">
          Discover, collect, and sell <br />
          extraordinary NFTs
        </div>
      </div>
    </section>
    <section class="nft-topSellers">
      <TopSellers :topSellers="topSellers" />
    </section>
    <section class="nft-hotBids">
      <HotBids
        :hotBids="hotBidsFilteredList"
        :isHotBidFullData="isHotBidFullData"
        @loadMoreHotBids="isHotBidFullData = !isHotBidFullData"
      />
    </section>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import TopSellers from "../components/home/TopSellers.vue";
import HotBids from "../components/home/HotBids.vue";
export default {
  name: "Home",
  components: { TopSellers, HotBids },
  data() {
    return {
      topSellers: [],
      hotBids: [],
      isHotBidFullData: false,
    };
  },
  async mounted() {
    await this.getTopSellers();
    await this.getHotBids();
  },
  computed: {
    hotBidsFilteredList() {
      return this.isHotBidFullData ? this.hotBids : this.hotBids.slice(0, 8);
    },
  },
  methods: {
    async getTopSellers() {
      await axios
        .get("https://62ceb596826a88972d016070.mockapi.io/sellers")
        .then((response) => {
          this.topSellers = response.data;
        });
    },
    async getHotBids() {
      await axios
        .get("https://62ceb596826a88972d016070.mockapi.io/bids")
        .then((response) => {
          this.hotBids = response.data;
        });
    },
  },
};
</script>
<style scoped>
section {
  position: relative;
  width: 100%;
  margin-top: 60px;
}
.nft-topSellers {
  position: relative;
  width: 100%;
  margin-top: 60px;
}
</style>
