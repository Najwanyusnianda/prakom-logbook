<template>
  <div class="bg-gray-100 h-screen">
    <div class="container flex  ">
      <div class="bg-white m-auto my-10 shadow-sm px-5 w-full lg:w-1/3 rounded-lg">
        <h1 class="font-medium text-2xl mt-3 text-center font-display "> Buat Kegiatan</h1>
        <form @submit.prevent="submitKegiatan" class="pb-5">

          <div class="my-5 text-sm">
            <litepie-datepicker style="--tw-bg-opacity: 1;background-color: rgba(243, 244, 246, var(--tw-bg-opacity));"
              v-model="kegiatan.tanggal_kegiatan" as-single :formatter="formatter" >
            </litepie-datepicker>
            <hr>



            <!-- Nama kegiatan -->
            <div class="flex mt-3 ">
              <div
                class="w-4 h-auto z-10  text-center mr-4 pointer-events-none flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <input type="text" v-model="kegiatan.nama_kegiatan"
                class="w-full -ml-10 pt-3 pb-3 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-300"
                placeholder="Nama Kegiatan">
            </div>
            <!-- Lokasi kegiatan -->
            <div class="flex  mt-3">
              <div
                class="w-4 h-auto z-10  text-center mr-4 pointer-events-none flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <input type="text" v-model="kegiatan.lokasi_kegiatan"
                class="w-full -ml-10  pt-3 pb-3  pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-300"
                placeholder="Lokasi Kegiatan">
            </div>
            <!-- Penyelenggara kegiatan -->
            <div class="flex  mt-3">
              <div
                class="w-4 h-auto z-10  text-center mr-4 pointer-events-none flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <input type="text" v-model="kegiatan.penyelenggara"
                class="w-full -ml-10  pt-3 pb-3  pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-300"
                placeholder="Penyelenggara">
            </div>

          </div>


          <div class="flex ">
            <input type="reset" value="Reset"
              class="text-center text-white bg-gray-400 p-3 duration-300 rounded-lg mr-2 h-10 hover:bg-gray-500 text-md h-auto focus:outline-none">

            <input type="submit" class=" text-white bg-blue-300 p-3 duration-300 rounded-lg text-md h-auto
                      hover:bg-blue-500 w-full h-10 focus:outline-none" value="Simpan">
          </div>

        </form>
      </div>
    </div>
    <div class="container">

      <ul v-for="kegiatan in allKegiatans" :key="kegiatan.id">
        <li>{{ kegiatan.kegiatan }}</li>
      </ul>
    </div>
  </div>

</template>

<script>
  import {
    ref
  } from 'vue';
  import {
    mapGetters,
    mapActions
  } from "vuex";
  import dayjs from 'dayjs'
  import LitepieDatepicker from 'litepie-datepicker';


  export default {
    name: 'CreateKegiatan',
    props: {
      msg: String
    },
    components: {
      LitepieDatepicker
    },
    data() {
      return {
        kegiatan: {
          nama_kegiatan: '',
          lokasi_kegiatan: '',
          tanggal_kegiatan: dayjs(new Date()).format("DD MMM YYYY"),
          penyelenggara: '',

        },

        componentLoaded: false
      }

    },
    computed: {
      ...mapGetters(["allKegiatans"]),


    },
    methods: {
      ...mapActions([
        "fetchKegiatans", "addKegiatan"
      ]),

      submitKegiatan() {
        this.kegiatan.tanggal_kegiatan = dayjs(this.kegiatan.tanggal_kegiatan).format("YYYY-MM-DD");
        this.addKegiatan(this.kegiatan)
        this.kegiatan.nama_kegiatan=''
        this.kegiatan.lokasi_kegiatan=''
        this.kegiatan.penyelenggara=''
        this.kegiatan.tanggal_kegiatan= dayjs(new Date()).format("DD MMM YYYY")
      }
    },
    created() {
      this.fetchKegiatans();
    },
    mounted() {
      this.componentLoaded = true
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