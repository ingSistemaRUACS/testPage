<template>
  <article>
    <div class="ListTeachers">
      <Teacher
        v-for="(item,key) in arrayDocent"
        :src="item.photo"
        :name="item.name"
        :key="key"
      />
    </div>
  </article>
</template>
<script>
import ListTeacher from './listTechers'
import { mapMutations } from 'vuex'
import Teacher from '@/components/teachers/Teacher'

export default {
  data() {
    return {
      arrayDocent:ListTeacher
    }
  },
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
article {
    max-width: 800px;
    width: 100%;
    margin: 50px auto;
    
  }
.ListTeachers {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}  
</style>
