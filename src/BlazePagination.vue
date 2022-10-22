<template>
  <div class="blaze-pagination-container">
    <slot name="previous">
      <button class="blaze-prev" aria-label="Go to previous slide">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </slot>

    <div class="blaze-pagination"></div>

    <slot name="next">
      <button class="blaze-next" aria-label="Go to next slide">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </slot>
  </div>
</template>

<style lang="css" scoped>
.blaze-pagination-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
}

.blaze-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
}

/**
 * Deep required because buttons are dynamically generated outside Vue.
 * The styling scope cannot be applied.
 */
:deep(.blaze-pagination button) {
  display: flex;
  padding: 0;
  margin: 0 0.25rem;
  height: 1rem;
  width: 1rem;
  font-size: 0;
  border-radius: 99px;
  cursor: pointer;
}

:deep(.blaze-pagination button:hover, .blaze-pagination button.active) {
  transform: scale(1.25);
}

.blaze-prev,
.blaze-next {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  background: none;
  cursor: pointer;
}

.blaze-prev svg,
.blaze-next svg {
  height: 1.5rem;
  width: 1.5rem;
  stroke: currentColor;
}
</style>
