import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    kegiatans:[]
  },
  mutations: {
    SET_KEGIATANS: (state,kegiatans) => (state.kegiatans=kegiatans),
    ADD_KEGIATAN:  (state,kegiatan) => (state.kegiatans.push(kegiatan)),
  },
  actions: {
    async fetchKegiatans({commit}){
      const response =await axios.get('http://localhost:3000/kegiatan');
      commit('SET_KEGIATANS',response.data);
    },
    async addKegiatan({commit},kegiatan){

       const nama_kegiatan=kegiatan.nama_kegiatan
       console.log('nama_kegiatan')
      const response = await axios.post('http://localhost:3000/kegiatan',{
        nama:nama_kegiatan
      });
      commit('ADD_KEGIATAN',response.data)
    }
  },
  getters:{
    allKegiatans: (state)=>{
      return state.kegiatans
    }
  },
  modules: {

  },
  created(){
    this.fetchKegiatans();
  },

})
