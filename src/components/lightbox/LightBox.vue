<template>
    <div>
      <div class="lightbox" v-if="image" @click="close">
        <transition name="lightbox-fade">
            <lightboximage :image="image" :key="image"></lightboximage>
        </transition>
            <div class="lightbox__close" @click="close"></div>
            <div class="lightbox__btn lightbox__next" @click.stop.prevent="next"></div>
            <div class="lightbox__btn lightbox__prev" @click.stop.prevent="prev"></div>
      </div>
     
      {{image}}
    </div>
</template>

<script>
import './lightboxDirective'
import lightboximage from './LightBoxImage' 
import store from './LightBoxStore'

export default {
    components: {
        lightboximage
    },
    data () {
        return{
            state: store.state
        }
    },
    methods:{
        close () {
            store.close()
        },
        next () {
            store.next()
        },
        prev () {
            store.prev()
        }

    },
    computed:{
        image () {    
            if(this.state.index !== false){
                //console.log(this.state.images[0]+" tadam")
                //console.log(this.state.index+" plop")
                return this.state.images[this.state.group][this.state.index] 
            }     
            else return false;           
        }
    }
}
</script>


<style lang="scss" src="./lightbox.scss"></style>