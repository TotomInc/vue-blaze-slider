import BlazeSlider, { type BlazeConfig } from "blaze-slider";
import { type Ref, ref, unref, onMounted } from "vue";

type MaybeRef<T> = Ref<T> | T;

/**
 * Creates a ref to a BlazeSlider instance.
 *
 * @param element HTML element to mount the `BlazeSlider` on.
 * @param config Configuration for the `BlazeSlider`.
 */
export function useBlazeSlider(
  element: MaybeRef<HTMLElement>,
  config?: BlazeConfig
): Ref<BlazeSlider | undefined> {
  const slider = ref<BlazeSlider | undefined>();

  onMounted(() => {
    slider.value = new BlazeSlider(unref(element), config);
  });

  return slider;
}
