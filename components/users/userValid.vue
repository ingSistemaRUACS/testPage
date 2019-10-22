<template>
  <section v-if="info" id="userValid">
    <img :src="info.photo" id="photo-valid"/>
    <div id="info-user">
      <h2>{{ info.name }}</h2>
      <h3>{{ info.carnet }}</h3>
      <h4>{{ info.section }}</h4>
    </div>
    <div id="opcion">
      <button @click="Click">verificar</button>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  methods:{
    Click () {
      let data = []
      data.push({id:this.info.id,carnet:this.info.carnet,section:this.info.section})
      this.$emit('click',data)
    }
  }
};
</script>
<style scoped>
#userValid {
  width: 95%;
  margin: 15px 2.5%;
  padding: 15px 0;  
  display: grid;
  grid-template-columns: auto 1fr auto;
  border-bottom: solid #b9b9b9 1px;
}
#photo-valid {
  width: 80px;
}
#info-user  {
  padding-top: 7px;
  color: #333333;
  border-right: solid #b9b9b9 1px;
}
#info-user > h2 {
  font-size: 1.1em;
  margin: 2px 0;
  margin-left: 10px;
}
#info-user > h3 {
  font-size: 1em;
  margin: 2px;
  margin-left: 12px;
}
#info-user > h4 {
  font-size: 0.9em;
  margin: 2px;
  margin-left: 12px;
}
#opcion {
  display: flex;
  align-items: center;
}
#opcion > button{
  background-color: #690bff;
  border: none;
  width: 100px;
  height: 40px;
  color: #ffffff;
  font-size: 1.1em;
  margin: 0;
  margin-left: 10px;
}
</style>