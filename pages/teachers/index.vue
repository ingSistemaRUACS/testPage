<template>
  <article>
    <div class="ListTeachers">
      <Teacher
        :src="require('@/assets/defaulUser-100.jpg')"
        name="Mcs. Nombre Apellido"
        v-for="item in 15"
        :key="item"
      />
    </div>
  </article>
</template>
<script>
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
    this.ChangePresent({
      title:'Docentes',
      info:'A continuaciรณn, podrรก observar los docentes que imparte en el recinto universitario.',
      img:'presentTecher.svg'})
  }
}
</script>
<style scoped>
@media screen and (min-width: 320px) and (max-width: 579px) {
  article {
    width: 100%;
    margin: 50px 0;
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
