<template>
<div class="bg-gray-100 h-screen">
    <div class="container flex  ">
    <div class="bg-white m-auto my-10 shadow-md px-5 w-full lg:w-2/3">
    <h1 class="font-medium text-2xl mt-3 text-center">Add New Log</h1>
  <form @submit.prevent="add" class="pb-5">
                   
                    <div class="my-5 text-sm">
                        <label for="username" class="block text-black"></label>
                        <input type="text" autofocus id="task" 
                        class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" 
                        placeholder="kegiatan.." />
                    </div>
                      <button 
                      class="block text-center text-white bg-blue-400 p-3 duration-300 rounded-sm 
                      hover:bg-black w-full ">Tambah
                      </button>
  </form>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
