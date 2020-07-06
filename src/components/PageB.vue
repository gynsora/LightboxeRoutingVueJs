<template>
    <div>
        {{title}} page B vue
        <h1>Article</h1>
        <p>{{ $route.params.id }}</p>

    </div>
</template>

<script>

export default {
    components: {
    },
    data () {
        return{
            title: 'page d\'article avec une id'
        }
    },
    methods:{
     

    },
    computed:{
       
      
    }
}
</script>