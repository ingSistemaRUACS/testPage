<template>
  <article>
    <div class="ListClass">
      <Class v-for="(item, index) in info" :key="index" :info="item" />
    </div>
  </article>
</template>
<script>
import listClass from './listClass'
import Class from '@/components/pensum/Class'

export default {
  components: {
    Class
  },
  data () {
    return {
      info: listClass
    }
  }
}
</script>
<style scope>
article {
  width: 100%;
  max-width: 1000px;
  margin: 0px auto;
}
.ListClass {
  width: 820px;
  margin: 50px auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
}

@media screen and (max-width: 992px) {
  .ListClass {
    width: 90%;
    margin: 50px 5%;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(2,50%);
  }
}

@media screen and (max-width: 768px) {
  .ListClass {
    margin: 50px auto;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 100%;
  }
}

</style>
