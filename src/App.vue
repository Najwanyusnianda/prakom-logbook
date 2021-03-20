<template>
  <div id="main-nav" class="shadow-sm p-0 ">

  <div class="flex flex-col max-w-screen-xl  mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
    <div class="p-4 flex flex-grow flex-row items-center justify-between">
      <button type="button" class=" group leading-6 font-medium flex items-center space-x-3 sm:space-x-1 hover:text-gray-600 transition-colors duration-200 w-full py-2">
          <svg width="24" height="24" fill="none" class="text-gray-400 group-hover:text-gray-500 transition-colors duration-200 mr-3 ml-2">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          <span class="font-display font-bold text-gray-500 ">Pencarian cepat</span>
          <span class="font-display font-bold text-gray-500 hidden sm:inline" style="" >juknis Prakom</span>

      </button>
      <button class="md:hidden rounded-lg focus:outline-none focus:shadow-outline" @click="toggle" >
        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
          <path :class="{hidden:toggleNav}"  fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
          <path :class="{hidden:!toggleNav}" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
    <nav  class="ml-1 pb-4 md:pb-0 md:flex  md:justify-end md:flex-row" :class="{flex:toggleNav,hidden:!toggleNav}">
      <router-link class="font-display px-4 mr-1 py-2 mt-2 text-sm font-semibold text-gray-900 bg-blue-400 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-white focus:text-white 
      hover:bg-blue-400   focus:bg-blue-400 focus:outline-none focus:shadow-outline" 
        to="/" >
        Beranda
      </router-link>
      <router-link class="font-display px-4 py-2 bg-transparent mt-2 text-sm font-semibold text-gray-900  rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-white focus:text-gray-900 hover:bg-blue-400 focus:bg-gray-200 focus:outline-none focus:shadow-outline" 
        to="/your_task">
        Kegiatan mu
      </router-link>

 
    </nav>
  </div>
    <!--<router-link to="/your_task">Kegiatan </router-link>
    <router-link to="/">Home</router-link>-->
    
  </div>
  <router-view/>
  
</template>

<script>
export default {
    name:'App',
    data(){
        return{
            toggleNav:false
        }
    },
    methods:{
        toggle(){
          
            this.toggleNav = !this.toggleNav
            console.log(this.toggleNav)
            
        }
    }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
