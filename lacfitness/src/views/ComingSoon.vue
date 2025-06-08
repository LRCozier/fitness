<template>
  <main class="coming-soon-container">
     <div class="image-panel">
      <img src="../assets/hero.jpg"; />
     </div>
    <section class="text-panel">
      <div class="text-content">
        <h1 class="brand-name">L.A.C Fitness</h1>
        <h2 class="subtitle">Coming Soon</h2>
        <p class="description">
          My personal training services and custom training programmes will be available soon. Stay tuned!
        </p>
        <router-link to="/register" class="cta-button">
          Register Your Interest
        </router-link>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">

</script>

<style scoped>
.coming-soon-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
  flex-direction: row;
}

.image-panel {
  flex: 1;
  background-image: url('@/assets/hero.jpg');
  background-size: cover;
  background-position: center;
  display: block;
}

.text-panel {
  flex: 1;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
}

.text-content {
  max-width: 500px;
}

.brand-name {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #666;
}

.description {
  font-size: 1rem;
  margin-bottom: 2rem;
}

.cta-button {
  background-color: #222;
  color: #fff;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #444;
}

/* Responsive */
@media screen and (max-width: 768px) {
  .coming-soon-container {
    flex-direction: column;
    position: relative;
  }

  .image-panel {
    position: absolute;
    inset: 0;
    z-index: 0;
    opacity: 0.6;
  }

  .text-panel {
    flex: none;
    padding: 4rem 2rem;
    background-color: transparent;
    z-index: 1;
  }

  .brand-name,
  .subtitle,
  .description,
  .cta-button {
    color: #fff;
  }

  .text-content {
    position: relative;
    z-index: 2;
  }
}
</style>
