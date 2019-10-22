<template>
  <div id="Input">
    <label id="title" for="control">{{ title }} :</label>
    <input
    :class="{'input-error':error}"
      :type="type"
      name="control"
      :disabled="disabled"
      v-model="ValueInternal"
      placeholder="Ingrese"
    />
    <label v-if="!disabled"  id="message" for="control">{{ message }}</label>
  </div>
</template>
<script>
export default {
  props: {
    error: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    type: { type: String, default: "" },
    title: { type: String, default: "" },
    value: { type: String, default: "" },
    message: { type: String, default: "" }
  },
  computed:{
    ValueInternal:{
      get(){return this.value},
      set(value){this.$emit('input',value)}
    }
  }

};
</script>
<style scoped>
#Input {
  color: #ffffff;
  display: block;
  margin: 10px auto;
  padding: 0;
  width: 250px;
}
#Input > #title {
  font-weight: bold;
  display: block;
  margin: 0;
  padding: 0;
  font-size: 0.9em;
}

#Input > input {
  background: #535353;
  border: solid #cfcfcf 1px;
  width: 250px;
  font-size: 1em;
  margin: 3px 0;
  padding: 7px 0;
  padding-left: 15px;
   color: #e7e7e7;
}

#Input > input[disabled] {
  border: solid #535353 1px;
}


#Input > #message {
  display: block;
  margin: 0;
  padding: 0;
  padding-left: 15px;
  font-size: 0.8em;
  color: #d6d6d6;
}

#Input > .input-error {
  border: #e74c3c solid 2px;
  color: #e74c3c;
}

@media (max-width: 500px) {
  #Input {
    width: 320px;
    margin: 10px auto;
  }
  #Input > input {
    width: 90%;
    padding-left: 10%;
    margin: 4px 0;
    border: #646464 solid 1px;
  }
  #Input > #title {
   margin: 2px;
  }
}
</style>