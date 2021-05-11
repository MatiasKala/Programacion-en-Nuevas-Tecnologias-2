
export default {
  name: 'formulario',
  components: {},
  props: [],
  data () {
    return {
      formData:this.getInitialData(),
      formState:{},
      nombreMinLength : 3,
      nombreMaxLength: 10,
      edadMin : 18,
      edadMax : 120,
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
      this.formState._reset();
    },
  }
}


