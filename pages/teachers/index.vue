<template>
  <article>
    <Teacher :src="require('@/assets/user.svg')" name="Mcs. Nombre Apellido" />
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
