<template>
  <div>
    <h2 class="mb-5">Hot Bids</h2>
    <b-row>
      <b-col cols="3" class="mb-3" v-for="item in hotBids" :key="item.id">
        <div class="nft-home-card">
          <div class="nft-hotbids-card-content">
            <img class="mb-2" :src="item.image" :alt="item.image" />
            <p>{{ item.name }}</p>
            <p>{{ item.price }} ETH</p>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col cols="12" class="text-center">
        <b-button
          @click="$emit('loadMoreHotBids')"
          class="nft-loadlMoreBtn"
          variant="outline-danger"
          >{{ buttonName }}</b-button
        >
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  props: {
    hotBids: {
      type: Array,
      default: () => {
        return [];
      },
    },
    isHotBidFullData: {
      type: Boolean,
    },
  },
  computed: {
    buttonName() {
      return this.isHotBidFullData ? "Show Less" : "Load More";
    },
  },
};
</script>
<style scoped>
.nft-hotbids-card-content {
  padding: 16px 8px;
  font-size: 1rem;
}
.nft-hotbids-card-content img {
  width: 100%;
  height: 250px;
  border-radius: 20px;
}
.nft-loadlMoreBtn {
  padding: 10px 110px;
}
.btn-outline-danger {
  color: #da18a3;
  border-color: #da18a3;
}
.btn-outline-danger:hover {
  background: inherit;
  color: #da18a3;
  border-color: #da18a3;
}
</style>
