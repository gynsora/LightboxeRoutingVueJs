<template>
    <div>
        page A
      {{title}}
      {{ $route.params }}
      <ul>
        <router-link :to="{name: 'enfantAa'}" class="nav-link">Enfant a </router-link>
        <router-link :to="{name: 'enfantAb'}" class="nav-link">Enfant b </router-link>
        </ul>
      <router-view></router-view>
    </div>
</template>

<script>

export default {
    components: {
    },
    data () {
        return{
            title: 'heelo'
        }
    },
    methods:{
     

    },
    computed:{
       
      
    }
}
</script>
