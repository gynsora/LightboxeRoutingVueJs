<template>
    <div id="lightboxContainer">
        <div>
            <a :href="'https://picsum.photos/id/'+n+'/800/600'" v-lightbox v-for="n in 9" :key="n">
                <img :src="'https://picsum.photos/id/'+n+'/150/150'">
            </a>
            <a :href="'https://picsum.photos/id/'+(m+10)+'/800/600'" v-lightbox="'rio'" v-for="m in 9" :key="m+10">
                <img :src="'https://picsum.photos/id/'+(m+10)+'/150/150'">
            </a>
        </div>
        <lightbox></lightbox>
        <!--button @click="title = 'futurama'">futurama</button-->
        <!--button @click="title = 'rio'">RIO</button-->
    </div>
</template>

<script>
import lightbox from './lightbox/LightBox.vue'
export default {
  name: 'App',
  data () {
    return {
      title : 'futurama'
    }
  },
  components: {
    lightbox
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
#lightboxContainer{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
