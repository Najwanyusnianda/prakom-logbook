<template>
  <div class="create">
     <CreateKegiatan msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import CreateKegiatan from '@/components/CreateKegiatan.vue'

export default {
  name: 'YourTask',
  components: {
    CreateKegiatan
  }
}
</script>