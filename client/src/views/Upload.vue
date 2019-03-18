<template>
  <div>
    <h3>ActiveGram Bot</h3>
    <p>Load Active Recall Notes to Telegram Bot</p>
    <b-form>
      <b-form-group id="label-username" label="Telegram username:" label-for="username">
        <b-form-input
            id="username"
            type="text"
            v-model="username"
            placeholder="Enter Username without @"
            required />
      </b-form-group>
      <b-form-group id="label-password" label="Password:" label-for="password">
        <b-form-input
            id="password"
            type="password"
            v-model="password"
            placeholder="Password, received when first talking to bot"
            required />
      </b-form-group>
      
      <b-form-group id="label-file" label="File :" label-for="file">
        <b-form-file
          id='file'
          v-model="file"
          placeholder="Choose a file..."
          drop-placeholder="Drop file here..."
          accept="*.csv"
        />
      </b-form-group>
      <b-button variant='success' v-on:click='onUpload'>Update notes</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Upload',
  data(){
      return {
          file: null,
          username: null,
          password: null
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
        formData.append('username', this.username);
        formData.append('password', this.password);
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
.form-group{
  text-align:left;
}
h3{
  padding: 10vmin;
  font-size: 10vmin;
}
h3 + p {
  font-size: 4vmin;
}
</style>
