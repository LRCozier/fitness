<template>
  <div class="coming-soon">
    <div class="content">
      <h1>L.A.C Fitness</h1>
      <h2>Coming Soon</h2>
      <p>
        My personal training services and custom training programmes will be available soon. Stay tuned!
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ComingSoon',
});
</script>

<style scoped>
.coming-soon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  height: 100vh;
  background: linear-gradient(to right, #1e3c72, #2a5298);
  color: #fff;
  text-align: center;
}

.content {
  max-width: 700px;
  width: 100%;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.25rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.25rem;
  }

  p {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.75rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>