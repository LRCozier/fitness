<template>
  <section class="site-section">
    <h1 v-if="title" class="site-heading">{{ title }}</h1>
    <h2 v-if="subtitle" class="site-subheading">{{ subtitle }}</h2>
    <slot></slot>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  }
});
</script>