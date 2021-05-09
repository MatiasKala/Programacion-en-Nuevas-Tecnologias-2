
export default {
  name: 'formulario',
  components: {},
  props: [],
  data () {
    return {
      formData:this.getInitialData(),
      formDirty:this.getInitialData()
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInitialData(){
      return {
        nombre:"",
        apellido:"",
        edad:"",
        email:"",
      }
    },
    enviar(){
      console.log({...this.formData});
      this.formData=this.getInitialData();
      this.formDirty=this.getInitialData();
    },
  }
}


