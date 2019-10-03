<template>
  <div class="container">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/create" class="nav-link">Create Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contacts" class="nav-link">Contacts</router-link>
        </li>
      </ul>
    </nav><br />
    <img class="center" alt="Contacts logo" src="./assets/contacts.png">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Turret+Road&display=swap');

#app {
  font-family: 'Turret Road', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }

.fade-enter, .fade-leave-active {
  opacity: 0
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
