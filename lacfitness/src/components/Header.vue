<template>
  <header>
    <nav class="navbar">
      <button class="menu-toggle" @click="toggleMenu">☰</button>
      <ul :class="['nav-links', { open: menuOpen }]">
        <li><router-link to="/" @click="closeMenu">Home</router-link></li>
        <li><router-link to="/about" @click="closeMenu">About</router-link></li>
        <li><router-link to="/services" @click="closeMenu">Services</router-link></li>
        <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<style scoped>
:root {
  --text-color: #333;
  --primary-background: #f8f8f8;
  --navbar-height: 1rem;
}

header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: var(--primary-background);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.navbar {
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
  justify-content: flex-end;
  height: var(--navbar-height);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin: 0;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-color);
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #007bff;
  outline: none;
  text-decoration: none;
}

.menu-toggle {
  display: none;
  font-size: 1.8rem;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-color);
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem;
    justify-content: flex-end;
  }

  .menu-toggle {
    display: block;
    z-index: 1003;
  }

  .nav-links {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: var(--primary-background);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
    z-index: 1002;
    overflow-y: auto;
  }

  .nav-links.open {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
    display: flex;
  }

  .nav-links li {
    width: 100%;
  }

  .nav-links a {
    text-align: center;
    margin: 0.5rem 0;
    display: block;
    padding: 1rem;
  }
}
</style>