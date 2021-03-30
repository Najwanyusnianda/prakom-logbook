<template>
  <div class="create">
     <!--<CreateKegiatan msg="Welcome to Your Vue.js App"/>-->
     <ListKegiatan/>
  </div>
</template>

<script>
//import CreateKegiatan from '@/components/CreateKegiatan.vue'
import ListKegiatan from '@/components/ListKegiatan.vue'

//import CalendarKegiatan from '@/components/CalendarKegiatan.vue';

export default {
  name: 'YourTask',
  components: {
    //CreateKegiatan,
    ListKegiatan


  }
}
</script>