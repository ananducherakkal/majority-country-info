<script setup lang="ts">
import { ref, computed, onUnmounted } from "vue";

const props = defineProps<{
  onScroll?: () => void;
  unmounted?: () => void;
}>();

const lastScrollHeight = ref<number | null>(null);
const scrollable = ref<HTMLElement | null>(null);
const handleScroll = () => {
  if (scrollable.value) {
    const { scrollTop, scrollHeight, clientHeight } = scrollable.value;
    if (!lastScrollHeight || scrollHeight != lastScrollHeight.value) {
      const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;
      if (scrollPercentage >= 0.6) {
        props.onScroll && props.onScroll();
        lastScrollHeight.value = scrollHeight;
      }
    }
  }
};

onUnmounted(() => {
  props.unmounted && props.unmounted();
});
</script>

<template>
  <div
    class="w-full max-h-60 overflow-auto scrollable flex flex-col scrollbar-hide"
    ref="scrollable"
    @scroll="handleScroll"
  >
    <slot />
  </div>
</template>
