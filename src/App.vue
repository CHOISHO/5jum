<template>  
  <div>
    <daum-map></daum-map> 
    <rullette></rullette> 
  </div>
</template>

<script>

import DaumMap from './components/DaumMap'
import Rullette from './components/Rullette'

export default {
  name: 'app',
  computed: {
    menuIsOpen: {
      get () {
        return this.$store.state.splitter.open
      },
      set (newValue) {
        this.$store.commit('splitter/toggle', newValue)
      }
    }
  },
  components: {
    DaumMap,   
    Rullette 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ons-splitter-side[side=left][animation=overlay] {
  border-right: 1px solid #BBB;
}
</style>
