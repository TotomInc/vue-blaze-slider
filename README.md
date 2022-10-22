# `vue-blaze-slider`

> Vue 3 integration for [Blaze Slider](https://blaze-slider.dev), an high performance slider library.

## Usage

1. `npm install vue-blaze-slider blaze-slider`
2. In your `.vue` component:

```vue
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
      <BlazeSlide>5</BlazeSlide>
      <BlazeSlide>6</BlazeSlide>
    </template>

    <!-- Pagination slot is optional. -->
    <template #pagination>
      <BlazePagination />
    </template>
  </BlazeSlider>
</template>

<script setup lang="ts">
import { BlazeSlider, BlazeSlide, BlazePagination } from "vue-blaze-slider";
// CSS imports are important for basic usage, do not skip this part.
// It comes with minimal styling, you can override it with your own.
import "blaze-slider/dist/blaze.css";
import "vue-blaze-slider/dist/style.css";
</script>
```

## Props

### BlazeSlider

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `options` | `BlazeConfig` | `undefined` | Blaze Slider configuration. [See all available properties from official Blaze Slider documentation](https://blaze-slider.dev/docs/api/BlazeConfig). |

## License

See [LICENSE](LICENSE).
