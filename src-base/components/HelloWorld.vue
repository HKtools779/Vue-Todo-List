<template>
  <div>
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:'hello Vue Component'
    }
  }
}
</script>

<style>
  .msg{
    font-size: 30px;
    background-color: #AA7890;
  }
</style>
