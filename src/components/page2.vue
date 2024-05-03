<template>
  <h1>{{ title }}</h1>
</template>

<script>
  module.exports = {
    data: function(){
      return{
        title: "page2.vue"
      }
    }
  }
  document.title = "page2";
</script>