<template>
  <h1>{{ title }}</h1>
</template>

<script>
  module.exports = {
    data: function(){
      return{
        title: "home"
      }
    }
  }
  document.title = "home";
</script>