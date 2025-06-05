<template>
  <footer class="footer">
    <div class="sitemap">
      <nav class="site-map">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    </div>
    <div class="social-icons">
      <a href="" target="_blank" rel="noopener">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
      <a href="" target="_blank" rel="noopener">
        <font-awesome-icon :icon="['fab', 'facebook']" />
      </a>
      <a href="" target="_blank" rel="noopener">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
    </div>
  </footer>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.footer {
  padding: 1rem;
  background-color: #222;
  text-align: center;
}

.social-icons a {
  color: white;
  margin: 0 0.5rem;
  font-size: 1.5rem;
}

.social-icons a:hover {
  color: #4a90e2;
}

.site-map {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.site-map a,
.site-map router-link {
  color: #fff;
  text-decoration: none;
}

.site-map a:hover {
  text-decoration: underline;
}
</style>