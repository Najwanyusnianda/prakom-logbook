<template>
  <div class="bg-gray-100 h-screen">
    <div class="container flex  ">
      <div class="bg-white m-auto my-10 shadow-sm px-5 w-full lg:w-1/3 rounded-lg">
        <h1 class="font-medium text-2xl mt-3 text-center"> Agenda Baru</h1>
        <form @submit.prevent="submitKegiatan" class="pb-5">
         {{ kegiatan.tanggal_kegiatan }}
          <div class="my-5 text-sm">
            <label for="username" class="block text-black"></label>
            <input type="text" autofocus id="nama_kegiatan" v-model="kegiatan.nama_kegiatan"
              class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="kegiatan.." />

            <litepie-datepicker v-model="kegiatan.tanggal_kegiatan" as-single :formatter="formatter"  @change="tanggal_kegiatan_formatter"></litepie-datepicker>

          </div>
          <div class="flex">
            <input type="reset" value="Reset"
              class="text-center text-white bg-gray-400 p-3 duration-300 rounded-lg mr-2 h-10 hover:bg-gray-500 ">

            <input type="submit" class="text-center text-white bg-blue-300 p-3 duration-300 rounded-lg
                      hover:bg-blue-500 w-full h-10" value="Simpan">
          </div>

        </form>
      </div>
    </div>
    <div class="container">

      <ul v-for="kegiatan in allKegiatans" :key="kegiatan.id">
        <li>{{ kegiatan.nama }}</li>
      </ul>
    </div>
  </div>

</template>

<script>
  import { ref } from 'vue';
  import {mapGetters,mapActions} from "vuex";
  import dayjs from 'dayjs'
  import LitepieDatepicker from 'litepie-datepicker';


  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    components:{
      LitepieDatepicker
    },
    data(){
      return{
        kegiatan:{
          nama_kegiatan:'',
          waktu:'sdsds',
          tanggal_kegiatan:''
        },

        componentLoaded:false
      }

    },
    computed:{
      ...mapGetters(["allKegiatans"]),


    },
    methods:{
      ...mapActions([
        "fetchKegiatans","addKegiatan"
        ]),

      submitKegiatan(){
        this.kegiatan.tanggal_kegiatan= dayjs(this.kegiatan.tanggal_kegiatan).format("YYYY-MM-DD");
        this.addKegiatan(this.kegiatan)
      }
    },
    created(){
      this.fetchKegiatans();
    },
    mounted(){
      this.componentLoaded =true
    },
    setup() {
    const tanggal_kegiatan = ref([]);
    const formatter = ref({
      date: 'DD MMM YYYY',
      month: 'MMM'
    });

    return {
      tanggal_kegiatan,
      formatter
    };
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }


</style>