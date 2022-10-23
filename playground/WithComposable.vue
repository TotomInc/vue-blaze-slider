<template>
  <div ref="sliderEl" class="blaze-slider">
    <div class="blaze-container">
      <div class="blaze-track-container">
        <div class="blaze-track">
          <div>slide 1</div>
          <div>slide 2</div>
          <div>slide 3</div>
          <div>slide 4</div>
          <div>slide 5</div>
          <div>slide 6</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import "blaze-slider/dist/blaze.css";

import { useBlazeSlider } from "../src/useBlazeSlider";

const sliderEl = ref<HTMLDivElement | null>(null);
const slider = useBlazeSlider(sliderEl);

console.log(slider);
</script>
