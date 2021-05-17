<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment="addComment"/>
      <List :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script>
  import Add from './components/Add'
  import List from './components/List'

  export default {

    data(){
      return{
        comments:[
          {
            name:'tom',
            content:'vue 真有意思！'
          },
          {
            name:'sam',
            content:'vue 有点难！'
          }
        ]
      }
    },

    methods:{
      addComment(comment){
        this.comments.unshift(comment)
      },

      deleteComment(index){
        this.comments.splice(index,1)
      }
    },

    components:{
      Add,
      List
    }
  }
</script>

<style>

</style>
