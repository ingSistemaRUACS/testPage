<template>
  <div class="inp-container">
    <img-inputer
      accept="image/*"
      bottomText=""
      placeholder=""
      @onChange="imgChanged"
      :class="selected ? 'selected' : ''"></img-inputer>
    <span id="close-button" @click="destroy">x</span>
  </div>
</template>

<script>
import ImgInputer from 'vue-img-inputer'

export default {
  components: {
    'img-inputer': ImgInputer
  },
  props: [
    'imgData'
  ],
  data () {
    return {
      selected: false
    }
  },
  methods: {
    imgChanged (el) {
      this.selected = true
      this.$emit('imageAdded', el, this)
    },
    destroy () {
      console.log('Hello')
      this.$emit('destroy', this)
    },
    reset () {
      this.selected = false
      this.$children[0].reset()
    }
  }
}
</script>

<style>

.inp-container{
  margin: 15px 15px;
  position: relative;
  user-select: none;
}

.img-inputer{
  width: 140px;
  height: 150px;
  overflow: hidden;
  font-size: 12px;
  text-align: center;
  box-shadow: 0px 0px 3px 0 gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 2px;
}

.img-inputer img{
  object-fit: contain;
  max-width: 80px;
  max-height: 80px;
}


#close-button{
  display: none;
  position: absolute;
  left: 8px;
  top: 4px;
  color: #4e4e4e;
  cursor: pointer;
}

.img-inputer.selected{
  pointer-events: none;
}

.img-inputer.selected+#close-button{
  display: block;
}

.img-inputer.selected input{
  display: none;
}
</style>