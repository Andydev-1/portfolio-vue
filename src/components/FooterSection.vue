<template>
  <footer :class="containerClasses">
    <div
      class="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
    >
      <div class="text-center md:text-left">
        <span class="block md:inline">Email: </span>
        <a
          href="mailto:your@email.com"
          class="hover:underline"
          :class="isDark ? 'text-emerald-400' : 'text-emerald-700'"
          >ikpaandrew057@gmail.com</a
        >
        <span class="mx-2">|</span>
        <span class="block md:inline">Phone: </span>
        <a
          href="tel:+1234567890"
          class="hover:underline"
          :class="isDark ? 'text-emerald-400' : 'text-emerald-700'"
          >+234 813 256 0739</a
        >
      </div>
      <div class="text-sm text-center md:text-right">
        &copy; {{ new Date().getFullYear() }} Ikpa Andrew. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import { useTheme } from "../composables/useTheme.js";

const { isDark } = useTheme();

const containerClasses = computed(() =>
  isDark.value
    ? "py-8 px-6 border-t mt-16 bg-neutral-800 text-neutral-400 border-neutral-800 transition-colors"
    : "py-8 px-6 border-t mt-16 bg-neutral-100 text-neutral-700 border-neutral-200 transition-colors"
);
</script>
