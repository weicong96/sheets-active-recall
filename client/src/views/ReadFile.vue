<template>
  <div>
      <div v-for='(q, index) in questions' v-bind:key='index'>
          {{ q.question }}
          <ul>
              <li v-for='(answer,index) in q.answer' v-bind:key='index'> {{ answer }}</li>
          </ul>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'ReadFile',
    data: function(){
        axios({
            method: 'GET',
            url: 'http://localhost:5000/read/'+this.$route.params.id
        }).then((res)=>{
            this.questions = res.data['questions']
        })
        return {
            fileId: this.$route.params.file,
            questions:[]
        }
    }
}
</script>
