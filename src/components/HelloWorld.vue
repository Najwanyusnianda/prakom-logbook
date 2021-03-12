<template>
  <div class="bg-gray-100 h-screen">
    <div class="container flex  ">
      <div class="bg-white m-auto my-10 shadow-sm px-5 w-full lg:w-1/3 rounded-lg">
        <h1 class="font-medium text-2xl mt-3 text-center"> Agenda Baru</h1>
        <form @submit.prevent="submitKegiatan" class="pb-5">

          <div class="my-5 text-sm">
            <label for="username" class="block text-black"></label>
            <input type="text" autofocus id="nama_kegiatan" v-model="kegiatan.nama_kegiatan"
              class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="kegiatan.." />
            <input type="date" autofocus id="tanggal_kegiatan" v-model="kegiatan.tanggal_kegiatan"
              class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="kegiatan.." />
                  <datepicker v-model="picked" />

          </div>
          <div class="flex">
              <input type="reset" value="Reset" class="text-center text-white bg-gray-400 p-3 duration-300 rounded-lg mr-2 h-10 hover:bg-gray-500 ">

              <input type="submit" class="text-center text-white bg-blue-300 p-3 duration-300 rounded-lg
                      hover:bg-blue-500 w-full h-10" value="Simpan">
          </div>

        </form>
      </div>
    </div>
    <div class="container">

      <ul v-for="kegiatan in allKegiatans" :key="kegiatan.id">
        <li>{{kegiatan.nama}}</li>
      </ul>
    </div>
  </div>

</template>

<script>
  import {mapGetters,mapActions} from "vuex";
  import Datepicker from 'vue3-datepicker'



  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    components:{
      Datepicker
    },
    data(){
      return{
        kegiatan:{
          nama_kegiatan:'',
          waktu:'sdsds',
          picked:''
        },
      }

    },
    computed:{
      ...mapGetters(["allKegiatans"])
    },
    methods:{
      ...mapActions([
        "fetchKegiatans","addKegiatan"
        ]),
      submitKegiatan(){
        this.addKegiatan(this.kegiatan)
      }
    },
    created(){
      this.fetchKegiatans();
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