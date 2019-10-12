<template>
  <article id="option">
    <h1 id="title-option">Opciones de usuario</h1>
    <section>
      <h2>Datos personales</h2>
      <section id="data-user">
        <div id="photo-perfil">
          <img :src="loggedUser.photo" alt="" />
          <input type="button" value="Editar foto de perfil" />
        </div>
        <div id="info-user">
          <Input type="text" title="Nombre" :value="name" />
          <Input
            type="text"
            title="Email"
            :value="loggedUser.email"
            :disabled="true"
          />
          <Input type="text" title="Telefono" :value="loggedUser.phone" />
        </div>
      </section>
      <h2>Datos de estudiantes</h2>
      <div id="info-student">
        <Input type="text" title="Carnet" />
        <Input type="text" title="Seccion" />
      </div>
      <h2>Verificar cuenta</h2>
      <div id="verify-user">
        <p>
          Porfavor registrar primero un carnet y seccion antes de Verificar la
          cuenta estos serviran para validarte como estudiantes de la UNI.
        </p>
        <p>Su cuenta ya fue verificada.</p>
        <button>Verificar</button>
      </div>
    </section>
  </article>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Input from "@/components/option/Input";

export default {
  layout: "option",
  components: { Input },
  data() {
    return {
      name: "",
      DesactiveName: true,
      DesactivePhone: true,
      DesactiveCarnet: true,
      DesactiveSection: true
    };
  },
  computed: {
    ...mapGetters({
      loggedUser: "loggedUser"
    })
  },
  created() {
    this.name = this.loggedUser.name.replace(/\b\w/g, l => l.toUpperCase());
  }
}
</script>
<style scoped>
#option {
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
}
#option > #title-option {
  background: #474747;
  font-size: 1.3em;
  font-weight: normal;
  width: 96%;
  padding: 8px 2%;
  margin: 0;
  color: #ffffff;
}
#option > section {
  width: 96%;
  height: 100%;
  padding: 2%;
  overflow: auto;
}
#option > section > h2 {
  font-size: 1.2em;
  color: #474747;
  padding-bottom: 5px;
  padding-left: 15px;
  background-color: #8000e213;
  border-top: solid #b4b4b4 1px;
  border-bottom: solid #b4b4b4 1px;
}
#data-user {
  width: 100%;
  display: grid;
  grid-gap: 50px;
  grid-template-columns: auto 1fr;
}
#photo-perfil {
  margin: 5px 25px;
}
#photo-perfil img {
  width: 200px;
  display: block;
}
#photo-perfil input[type="button"] {
  width: 200px;
  height: 50px;
  color: #ffffff;
  font-size: 1em;
  font-weight: bold;
  background-color: #474747;
  border: none;
}

#info-user {
  margin: 5px 25px;
}
#info-student {
  margin: 5px 25px;
}

#verify-user {
  margin: 5px 25px;
  margin-bottom: 100px;
}

#verify-user button {
  width: 100px;
  height: 50px;
  float: right;
  color: #ffffff;
  font-size: 1em;
  font-weight: bold;
  background-color: #474747;
  border: none;
}

@media (max-width: 500px) {
  #data-user {
    width: 100%;
    display: block;
  }
  #photo-perfil {
    width: 200px;
    margin: 5px auto;
    margin-bottom: 25px;
  }
  #info-user {
    margin: 5px auto;
  }
}
</style>