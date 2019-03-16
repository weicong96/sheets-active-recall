<template>
  <div class="hello">
    <h2>Upload file</h2>
    <input type='file'/>
    {{ file }}
    <input type='button' text='Process CSV'/>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
