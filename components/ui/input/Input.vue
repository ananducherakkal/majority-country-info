<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { useVModel } from "@vueuse/core";
import { cn } from "@/lib/shadcn";

const props = defineProps<{
  defaultValue?: string | number;
  modelValue?: string | number;
  class?: HTMLAttributes["class"];
}>();

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
});
</script>

<template>
  <input
    v-model="modelValue"
    :class="
      cn(
        'w-full h-10 text-sm rounded-sm border-2 border-gray-30 bg-gray-10 hover:border-gray-40 focus:border-primary overflow-hidden flex px-4 outline-none',
        props.class
      )
    "
  />
</template>
