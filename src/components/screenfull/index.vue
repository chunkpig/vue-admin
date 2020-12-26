<template>
 <div>
    <svg-icon :icon-class="isFullscreen?'exit-fullscreen':'fullscreen'" @click="clickFullscreen" />
  </div>
</template>
 
<script>
  import screenfull from 'screenfull'
  export default{
    name: 'screenfull',
    data(){
      return {
        isFullscreen: false
      }
    },
    methods:{
      clickFullscreen(){
        if (!screenfull.isEnabled) {
          this.$message({
            message: 'you browser can not work',
            type: 'warning'
          })
          return false
        }
        screenfull.toggle()
      }
    }
  }
</script>