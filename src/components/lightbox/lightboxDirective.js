import Vue from 'vue'
import store from './LightBoxStore'
Vue.directive('lightbox',{    
    bind (el,binding){
        
        //console.log('binding')
        let group = binding.value  === undefined ? 'default' : 'rio'
        store.addImage(el.getAttribute('href'),group)        
        el.addEventListener('click', function (e) {
            //ouvrir l'image
            //open(el.getAttribute('href'))
            e.preventDefault()
            //console.log(el)
            //store.state.image = el.getAttribute('href')
            store.open(el.getAttribute('href'),group)
        })
    },
    unbind (el,binding){        
        let group = binding.value  === undefined ? 'default' : 'rio'
       // console.log('unbinding')
        store.remove(el.getAttribute('href'),group) 
    }
})