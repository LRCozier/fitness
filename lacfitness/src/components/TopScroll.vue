<script setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

watch(() => route.fullPath, () => {
  window.scrollTo(0, 0);
}, { immediate: true });
</script>

<style scoped></style>