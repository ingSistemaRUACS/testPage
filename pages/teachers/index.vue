<template>
  <article>
    <div class="ListTeachers">
      <Teacher
        :src="require('@/assets/user.svg')"
        name="Mcs. Nombre Apellido"
        v-for="item in 15"
        :key="item"
      />
    </div>
  </article>
</template>
<script>
import Teacher from '@/components/teachers/Teacher'

export default {
  components: {
    Teacher
  }
}
</script>
<style scoped>
article {
  width: 100%;
  max-width: 1000px;
  margin: 0px auto;
}
.ListTeachers {
  max-width: 620px;
  margin: 50px auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
}
@media screen and (max-width: 992px) {
  .ListTeachers {
    width: 520px;
    margin: 50px auto;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 768px) {

  .ListTeachers {
    width: 250px;
    margin: 50px auto;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr;
  }
}
</style>
