
export default {
  name: 'src-components-contador',
  components: {},
  props: ['init','color'],
  data () {
    return {
      cont : this.init || 0
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    contar() {
      this.cont++
    },
   getColorBoton() {
      if(this.color) return 'is-'+this.color
      else return 'is-primary'
    }
  }
}


