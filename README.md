# `vue-blaze-slider`

> Vue 3 integration for [Blaze Slider](https://blaze-slider.dev), an high performance slider library.

## Usage

1. `npm install vue-blaze-slider`
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
// CSS import is important for basic usage, do not skip this part or it won't work.
// You can easily extend the default styles.
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
