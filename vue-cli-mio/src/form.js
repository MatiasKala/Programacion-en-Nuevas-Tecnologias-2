import Vue from 'vue'
import VueForm from 'vue-form'

var options = {
    validators : {
        'no-espacios' : function(texto){
            return !texto.includes(' ')
        }
    }
}

Vue.use(VueForm,options)