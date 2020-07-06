<template>
  <div id="app">    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand">Navbar</router-link>  
      <!--a class="navbar-brand" href="#">Navbar</a-->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item ">
            <router-link :to="{name: 'root'}" class="nav-link">Home <span class="sr-only">(current)</span></router-link>          
          </li>
          <li class="nav-item">
            <router-link to="/PageA" class="nav-link">Page A</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/lightBox" class="nav-link">lightBox</router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/article/1" class="nav-link">Article</router-link> 
          </li>
        </ul>
      </div>
    </nav>
    <h1>Hello App!</h1>

    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <div class="sidebar">
      <h1>SideBar</h1>
      <router-view name="sidebar"></router-view>
    </div>
    <div class="main">
      <h1>Main</h1>
      <router-view></router-view>
    </div>    
  </div>
</template>

<script>
export default {
 
}
</script>