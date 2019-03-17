<template>
  <div>
    <h3>Add file</h3>
    <b-form>
      <b-form-file
        v-model="file"
        :state="Boolean(file)"
        placeholder="Choose a file..."
        drop-placeholder="Drop file here..."
        accept="*.csv"
      />
      <b-form-input
          id="exampleInput1"
          type="text"
          v-model="username"
          required
          placeholder="Enter Username" />
      <p v-if='file'>Uploaded: {{ file.name }}</p> 
      <input type='button' value='Process CSV' v-on:click='onUpload'/>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Upload',
  data(){
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
          this.$router.push({
            name:'readFile',
            params: {
              'id': response.data.fileId
            }
          })
        })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
