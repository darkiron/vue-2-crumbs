<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/shop">Shop</router-link> |
      <router-link to="/about">About</router-link>

    </div>
    <app-breadcrumbs container="ol">
      <li slot-scope="{to, label, utils}">
        <router-link :to="to" exact :itemprop="utils && utils.itemprop">
          <span>{{ label }}</span>
         </router-link>
      </li>
      <span slot="current" slot-scope="{label}">{{ label }}</span>
    </app-breadcrumbs>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

ol {
  list-style: none;
  display: flex;
  flex-direction: row;
}

ol > li {
  margin: 0 .5rem;
}
ol > li:before {
  content: '>';
  margin: 0 .2rem;
}
ol > li > a, ol > li > span {
  text-transform: capitalize;
}

.btn-link {
  display: inline-block;
  border: 1px solid rgba(167, 162, 162, 0.51);
  text-decoration: none;
  padding: .5rem 1rem;
  transition: all 200ms linear;
  text-transform: uppercase;
  font-size: .7rem;
  font-weight: bold;
  letter-spacing: .1rem;
  display: flex;
  align-items:center;
  justify-content: center;
  border-radius: 1px;
  text-shadow: 1px 1px rgba(255, 255, 255, 0.3);
}

.container{
  display: flex;
  flex-wrap: wrap;
}

.product{
  margin: 1rem;
}
</style>
