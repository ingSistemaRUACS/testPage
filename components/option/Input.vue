<template>
  <div id="Input">
    <label for="control">{{ title }} :</label>
    <input :type="type" name="control" :disabled="inputdisabled" v-model="inputValue" placeholder="Ingrese"/>
    <button id="bt-edit" v-if="!disabled && inputdisabled" @click="edit">
      <img class="icon" src="../../assets/option/edit.svg" />
    </button>
    <button v-if="!disabled && !inputdisabled" id="bt-save"><img class="icon" src="../../assets/option/save.svg" /></button>
  </div>
</template>
<script>
export default {
data () {
    return { inputValue:'', inputdisabled:true}
},
  props: {
    disabled: { type: Boolean, default: false },
    type: { type: String, default: "" },
    title: { type: String, default: "" },
    value: { type: String, default: "" }
  },
  methods: {
    edit() {
      this.inputdisabled = false;
    },
    save() {
      this.$emit("click", this.inputValue);
    }
  },
  created () {
      this.inputValue = this.value;
  }
};
</script>
<style scoped>

#Input {
    color: #474747;
    display: block;
    margin: 10px 5px;
    padding: 0;
    width: auto;
}
#Input > label{
    font-weight: bold;
    display: block;
    margin: 0;
    padding: 0;
    font-size: 0.9em;
}

#Input > input{
    width: 250px;
    font-size: 1em;
    padding: 2px 3px;
}
#Input > input:disabled {
    color: rgb(134, 134, 134);
    border: none;
}

button 
{
    border:none;
    width: 40px;
    height: 40px;
    background-color: #777777;
}
.icon
{
    width: 20px;
}

@media(max-width: 500px) {
  #Input {
    width: 320px;
    margin: 10px auto;
  } 
}
</style>