<script setup lang="ts">
import { ref } from "vue";
import {
  ComboboxAnchor,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxRoot,
  ComboboxTrigger,
  ComboboxViewport,
} from "radix-vue";
import type { ComboboxOption } from "~/types/ui";

const selectedValue = ref("");

const props = defineProps<{
  options: ComboboxOption[];
  onSelect: (value: string) => void;
  onScrollEnd?: () => void;
}>();

const selectOption = (option: ComboboxOption) => {
  selectedValue.value = option.label;
  props.onSelect(option.value);
};

const lastScrollHeight = ref<number | null>(null);
const scrollable = ref<HTMLElement | null>(null);
const handleScroll = () => {
  if (scrollable.value) {
    const { scrollTop, scrollHeight, clientHeight } = scrollable.value;
    if (!lastScrollHeight || scrollHeight != lastScrollHeight.value) {
      const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;
      if (scrollPercentage >= 0.7) {
        props.onScrollEnd && props.onScrollEnd();
        lastScrollHeight.value = scrollHeight;
      }
    }
  }
};
</script>

<template>
  <ComboboxRoot v-model="selectedValue" class="relative w-full">
    <ComboboxAnchor
      class="min-w-[160px] inline-flex items-center justify-between w-full h-12 text-sm rounded-sm border-2 border-gray-30 bg-gray-10 hover:border-gray-40 focus:border-primary overflow-hidden outline-none"
    >
      <ComboboxTrigger
        class="w-full h-full inline-flex items-center justify-between"
      >
        <ComboboxInput
          class="!bg-transparent outline-none text-grass11 h-full selection:bg-grass5 placeholder-mauve8 flex-1 px-4"
          placeholder="Placeholder..."
        />
      </ComboboxTrigger>
    </ComboboxAnchor>

    <ComboboxContent
      class="absolute z-10 w-full mt-1 min-w-[160px] bg-gray-10 overflow-hidden rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFad"
    >
      <ComboboxViewport class="p-[5px]">
        <div
          class="w-full max-h-60 overflow-auto scrollable flex flex-col scrollbar-hide"
          ref="scrollable"
          @scroll="handleScroll"
        >
          <ComboboxEmpty
            class="text-mauve8 text-xs font-medium text-center py-2"
          />

          <ComboboxItem
            v-for="(option, index) in props.options"
            :key="index"
            class="text-sm leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[15px] pl-[25px] py-2 relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-primary/70 data-[highlighted]:text-primary-foreground cursor-pointer"
            :value="option.label"
            @click="selectOption(option)"
          >
            <span v-if="option.icon" class="mr-2">{{ option.icon }}</span>
            <span>{{ option.label }}</span>
            <!-- Always display label -->
          </ComboboxItem>
        </div>
      </ComboboxViewport>
    </ComboboxContent>
  </ComboboxRoot>
</template>
