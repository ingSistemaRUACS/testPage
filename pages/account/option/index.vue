<template>
  <article id="option">
    <h1 id="title-option">Opciones de usuario</h1>
    <section>
      <h2>Datos personales</h2>
      <div id="photo-perfil">
        <img :src="loggedUser.photo" alt="" />
      </div>
      <section id="data-user">
        <Input
          type="text"
          title="Nombre"
          message="Ingrese el nombre completo"
          :value="name"
          :disabled="DesactiveDataUser"
        />
        <Input
          type="text"
          title="Email"
          :value="loggedUser.email"
          :disabled="true"
        />
        <Input
          v-if="loggedUser.phone"
          type="text"
          title="Telefono"
          :value="loggedUser.phone"
          :disabled="DesactiveDataUser"
        />
      </section>
      <h2>Datos de estudiantes</h2>
      <button
        v-if="DesactiveDataStudent"
        class="btn-edit"
        @click="() => (DesactiveDataStudent = false)"
      >
        <img src="@/assets/option/edit.svg" alt="" srcset="" />
      </button>
      <section id="info-student">
        <Input
          type="text"
          title="Carnet"
          message="Utiliza - y mayuscula."
          v-model="carnet"
          :disabled="DesactiveDataStudent || verify"
        />
        <Input
          type="text"
          title="Grupo de estudio"
          message="Utiliza - y mayusculas."
          v-model="section"
          :disabled="DesactiveDataStudent"
        />
        <button
          v-if="!DesactiveDataStudent"
          @click="cancelStudentData"
          class="submit"
        >
          Cancelar
        </button>
        <button
          v-if="!DesactiveDataStudent"
          @click="submitStudent"
          class="submit"
        >
          Aceptar
        </button>
      </section>
      <h2>Verificar cuenta</h2>
      <section id="verify-user">
        <p v-if="!verify && !StockMessage">
          Por favor registrar primero su carnet y grupo de estudio antes de solicitar la 
          verificación de la cuenta, esto servirá para validarte como estudiantes de la UNI.
        </p>
        <p v-if="verify && !StockMessage">Su cuenta ya fue verificada.</p>
        <p v-if="!verify && StockMessage">Esperando verificación.</p>
        <button v-if="!verify && !StockMessage" class="submit" @click="VerifyUser()" :disabled="DesactiveVerify">Solicitar</button>
      </section>
    </section>
  </article>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Input from "@/components/option/Input";

export default {
  layout: "option",
  middleware:'verifyOptions',
  components: { Input },
  data() {
    return {
      name: "",
      phone: "",
      verify: false,
      section: "",
      carnet: "",
      DesactiveDataUser: true,
      DesactiveDataStudent: true,
      DesactiveVerify:true,
    };
  },
  computed: {
    ...mapGetters({
      loggedUser: "loggedUser",
      dataStudent: "getDataStudent",
      StockMessage:'geStockMessage'
    })
  },
  methods: {
    ...mapActions(["UpdateUser", "UpdateStudentData", "ChargeStudentData",'VerifyUser','StockMessageVerifyUser','UserRemove']),
    cancelStudentData() {
      this.DesactiveDataStudent = true;
      if (!this.student) {
        this.section = this.dataStudent.section;
        this.carnet = this.dataStudent.carnet;
      } else {
        this.section = "";
        this.carnet = "";
      }
    },
    submitStudent() {
      this.UpdateStudentData({ section: this.section, carnet: this.carnet });
      this.ChargeStudentData();
      this.DesactiveDataStudent = true;
    },
    FormatName() {
      return this.loggedUser.name.replace(/\b\w/g, l => l.toUpperCase());
    }
  },
  created() {
    this.name = this.FormatName();
    this.StockMessageVerifyUser();
    this.ChargeStudentData();
  },
  watch: {
    dataStudent(val) {
      if (val) {
        this.section = val.section;
        this.carnet = val.carnet;
        if (this.section != '' && this.carnet != '') {
          this.DesactiveVerify = false;
        } else {
          this.DesactiveVerify = true;
        }
        if (val.hasOwnProperty("verify")) {
          if (val.verify) {
            this.verify = true;
          }
        } else {
          this.verify = false;
        }
      }
    }
  }
};
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
  background: #333333;
  font-size: 1.3em;
  font-weight: normal;
  width: 96%;
  padding: 8px 2%;
  margin: 0;
  color: #ffffff;
}
#option > section {
  overflow: auto;
}

#option > section > h2 {
  background: linear-gradient(45deg, #5700e2, #0b69ff);
  font-weight: normal;
  font-size: 1.2em;
  color: white;
  padding: 10px 0;
  padding-left: 15px;
  margin: 0;
}

.btn-edit {
  background:  #5700e2;
  float: right;
  width: 50px;
  height: 50px;
  padding: 10px;
  border: none;
  margin: 10px;
}

#photo-perfil {
  width: 200px;
  margin: 0 auto;
  margin-top: 60px;
}

#photo-perfil > img {
  width: 200px;
}

#data-user {
  display: inline-block;
  width: 100%;
  margin-top: 70px;
}

#verify-user,
#delete-user {
  color: #ffffff;
  padding: 15px;

  margin-bottom: 100px;
}
.submit {
  background: #5700e2;
  border: none;
  width: 100px;
  height: 50px;
  float: right;
  color: #ffffff;
  font-size: 1.2em;
  margin: 15px;
}
.submit[disabled] {
  background-color: #757575;
}

</style>