<template>
  <article>
    <div class="ListTeachers">
      <Teacher
        v-for="(item,key) in ListTeacher"
        :src="require(item.photo)"
        :name="item.name"
        :key="key"
      />
    </div>
  </article>
</template>
<script>
import ListTeacher from './listTechers.js'
import { mapMutations } from 'vuex'
import Teacher from '@/components/teachers/Teacher'

export default {
  components: {
    Teacher
  },
   methods:{
    ...mapMutations(['ChangePresent'])
  },
  beforeMount(){
    this.ChangePresent(2)
  }
}
</script>
<style scoped>
@media screen and (min-width: 320px) and (max-width: 579px) {
  article {
    max-width: 800px;
    width: 100%;
    margin: 50px auto;
  }
  .ListTeachers {
    width: 260px;
    margin: 0px auto;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 250px;
  }
}

@media screen and (min-width: 580px) {
  article {
    width: 100%;
    margin: 50px 0;
  }
  .ListTeachers {
    width: 570px;
    margin: 0px auto;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 250px);
  }
}
</style>
