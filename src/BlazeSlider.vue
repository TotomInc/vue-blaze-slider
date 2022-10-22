<template>
  <div ref="sliderRef" class="blaze-slider">
    <div class="blaze-container">
      <div class="blaze-track-container">
        <div class="blaze-track">
          <slot name="default"></slot>
        </div>
      </div>

      <slot name="pagination"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import BlazeSlider, { type BlazeConfig } from "blaze-slider";

// Import default style to make the slider work.
import "blaze-slider/dist/blaze.css";

const sliderRef = ref<HTMLDivElement | null>(null);
const slider = ref<BlazeSlider | null>(null);

const props = defineProps<{
  options?: BlazeConfig;
}>();

onMounted(() => {
  if (sliderRef.value) {
    slider.value = new BlazeSlider(sliderRef.value, props.options);
  }
});
</script>
