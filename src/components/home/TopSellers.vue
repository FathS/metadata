<template>
  <div>
    <h2 class="mb-4">Top Sellers</h2>
    <b-row>
      <b-col>
        <vueper-slides
          class="no-shadow"
          :visible-slides="5"
          :slide-ratio="0.2"
          :dragging-distance="70"
        >
          <vueper-slide
            v-for="test in topSellers"
            :key="test.id"
            :title="test.name"
          >
            <template #content>
              <div class="nft-home-card">
                <span class="nft-card-id">{{ test.id }}</span>
                <div class="nft-card-topseller-content">
                  <img :src="test.avatar" alt="" />
                  <span>{{ test.name }}</span>
                  <span>{{ test.price }} ETH</span>
                </div>
              </div>
            </template>
          </vueper-slide>
        </vueper-slides>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  components: {
    VueperSlides,
    VueperSlide,
  },
  props: {
    topSellers: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>
