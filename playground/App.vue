<template>
  <BlazeSlider
    :options="{
      all: {
        slidesToShow: 3,
        slideGap: '2rem',
      },
    }"
  >
    <template #default>
      <BlazeSlide>1</BlazeSlide>
      <BlazeSlide>2</BlazeSlide>
      <BlazeSlide>3</BlazeSlide>
      <BlazeSlide>4</BlazeSlide>
    </template>

    <template #pagination>
      <BlazePagination />
    </template>
  </BlazeSlider>
</template>

<script setup lang="ts">
import BlazeSlider from "../src/BlazeSlider.vue";
import BlazeSlide from "../src/BlazeSlide.vue";
import BlazePagination from "../src/BlazePagination.vue";
</script>

<style lang="css">
*,
:after,
:before {
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
}

html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -o-tab-size: 4;
  tab-size: 4;
  font-family: Inter var, ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Noto Color Emoji;
}

body {
  padding: 0;
  margin: 0;
  min-height: 100%;
  color: #f8fafc;
  background-color: #0b1120;
}
</style>

<style lang="css" scoped>
:deep(.blaze-slide) {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 175px;
  border: 1px solid #334155;
  border-radius: 0.275rem;
  font-size: 2rem;
  color: #f8fafc;
  background-color: #1e293b;
}

:deep(.blaze-pagination-container svg) {
  stroke: #f8fafc;
}

:deep(.blaze-pagination button) {
  background-color: #1e293b;
}

:deep(.blaze-pagination button.active) {
  background-color: #1d4ed8;
}
</style>
