<template>
  <article>
    <div id="infoList">
      <h2>Lista de usuarios que solicitan verificacion</h2>
      <h4>Cantidad de solicitudes : {{length}}</h4>
    </div>
    <div id="listUsers">
    <UserVerify
      v-for="(item, index) in getListVerify"
      :key="index"
      :info="item"
      @click="verifyClick"
    />
    </div>
    <div v-if="length > 1" id="options">
      <button  @click="verifyClick(ListId())">verificar a todos</button>
    </div>
  </article>
</template>
<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
import UserVerify from "@/components/users/userValid";

export default {
  layout: "account",
  middleware: "verifyAuthenticated",
  components: { UserVerify },
  computed: {
    ...mapGetters(["getListVerify"])
  },
  data () {
    return { length:0 }
  },
  methods: {
    ...mapMutations({
      ChangaPagAccount: "ChangaPagAccount"
    }),
    ...mapActions(["ChargeListVerifyUser",'verifyUsers']),
    ListId(){
      let data = [];
      this.getListVerify.forEach(element => {
        data.push({id:element.id,carnet:element.carnet,section:element.section})
      })
      return data;
    },
    verifyClick(data)
    {
      this.verifyUsers(data);
    }
  },
  watch:{
    getListVerify(val){
      if (val) {
        this.length = val.length
      }
      
    }
  },
  created() {
    this.ChangaPagAccount("Usuarios");
    this.ChargeListVerifyUser();
  }
};
</script>
<style scoped>
#listUsers {
  border-right: solid #b9b9b9 1px;
  border-left: solid #b9b9b9 1px;
  margin: 5px 2%;
  width: 96%;
}
#infoList {
  border-bottom: solid #b9b9b9 1px;
  margin: 5px 2%;
  width: 96%;
}

#infoList > h2{
  border-right: solid #b9b9b9 1px;
  border-left: solid #b9b9b9 1px;
  padding: 15px 10px;
  color: #333333;
  font-size: 1.2em;
  margin-top: 70px;
  margin-bottom: 10px;
} 

#infoList > h4{
  text-align: right;
  font-weight: normal;
  color: #616161;
  font-size: 0.8em;
  margin: 0;
  margin-top: 70px;
  padding: 6px 15px;
} 

#options {
  border-right: solid #b9b9b9 1px;
  border-left: solid #b9b9b9 1px;
  padding: 15px 10px;
  margin: 10px 2%;
  display: grid;
  grid-template-columns: 1fr auto;
}
#options > button{
  grid-column: 2;
  background-color: #690bff;
  border: none;
  width: 200px;
  height: 40px;
  color: #ffffff;
  font-size: 1.1em;
  margin: 0;
  margin-left: 10px;
}
</style>