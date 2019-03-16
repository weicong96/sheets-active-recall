<template>
  <div class="hello">
    <h2>Upload file</h2>
    <input type='file' v-on:change='onChange'/>
    <p v-if='file'>Uploaded: {{ file.name }}</p>
    <input type='button' value='Process CSV' v-on:click='onUpload'/>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'MainPage',
  data: function(){
      return {
          file: null
      }
  },
  props: {
    msg: String
  },
  methods:{
      onChange(e){
          this.file = e.target.files[0];
      },
      onUpload(){
        var formData = new FormData();
        formData.append('file', this.file);
        axios({
            method: 'POST',
            url: 'http://localhost:5000/upload',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        }).then((response)=>{
            console.log(response);
        })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
