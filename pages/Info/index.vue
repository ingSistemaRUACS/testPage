<template>
  <article id="info">
    <div class="container-info"> 
      <img class="icon" src="@/assets/info/bullseye.svg" alt="" />
      <h1>Objetivos específicos</h1>
      <ul>
          <li>
          Formar profesionales en Ingeniería de Sistemas con sólidos conocimientos, habilidades y actitudes en el desarrollo de sistemas de gestión organizacionales y sistemas de información utilizando las TIC como herramienta fundamental y de apoyo del proceso enseñanza aprendizaje a fin de aportar en la solución de problemas complejos, necesidades y demandas de crecimiento y desarrollo de los sectores económicos, sociales y productivos del país.
          </li>
          <li>
            Formar profesionales en Ingeniería de Sistemas con sólidos conocimientos, habilidades y actitudes para el desarrollo de la investigación, en temas vinculados con el desarrollo de sistemas de gestión organizacionales y sistemas de información, realizando proyectos emprendedores, respetando las normas ambientales, contribuyendo así, al desarrollo integral de la nación.
          </li>
          <li>
            Formar profesionales en Ingeniería de Sistemas con sólidos conocimientos, habilidades y actitudes en el desarrollo de sistemas de gestión organizacionales y sistemas de información utilizando estrategias que permitan la vinculación con la realidad práctica, a fin de aportar en la solución de problemas complejos, necesidades y demandas del desarrollo de los sectores económicos, sociales y productivos del país.
          </li>
          <li>
            Garantizar una gestión coherente y pertinente de la carrera para el aseguramiento de los recursos humanos, tecnológicos y financieros, que aporten a la formación integral de profesionales de Ingeniería de Sistemas y propicien la investigación, extensión y vinculación con los diversos sectores y actores del país, aportando así al desarrollo sustentable de Nicaragua.
          </li>
        </ul>
    </div>
    <div class="container-info"> 
      <img class="icon" src="@/assets/info/mission.svg" alt="" />
      <h1>Misión</h1>
      <p>
        La carrera Ingeniería de Sistemas de la Universidad Nacional de Ingeniería, tiene como misión la formación integral de Ingenieros de Sistemas, en el desarrollo y gestión de sistemas organizacionales que dan respuesta a problemas complejos integrando soluciones tecnológicas con los procesos de negocios;  mediante la investigación, innovación, extensión y vinculación con los diversos sectores y actores del país, aportando así al desarrollo sustentable de Nicaragua.
      </p>
    </div>
     <div class="container-info"> 
      <img class="icon" src="@/assets/info/eye.svg" alt="" />
      <h1>Visión</h1>
      <p>
      La carrera Ingeniería de Sistemas de la Universidad Nacional de Ingeniería consolida como líder en la formación y el desarrollo profesional de Ingenieros de Sistemas en el país, y es un referente regional  en la formación integral de Ingenieros de Sistemas estando a la vanguardia en las áreas del conocimiento que conforman el cuerpo curricular de la carrera, tomando en cuenta el enfoque ético, social, económico y la responsabilidad ambiental, contribuyendo al desarrollo de la sociedad Nicaragüense.
      </p>
    </div>
    <div class="container-info">
      <img class="icon" src="@/assets/info/university.svg" alt="" />
      <h1>Universidad Nacional de Ingeniería Augusto C.Sandino (UNI RUACS)</h1>
      <blockquote>
      <p>
        La universidad Nacional de Ingeniería (UNI) es una casa de estudios superiores estatal y autónoma, radicada en la ciudad de Managua, Nicaragua.
      </p>
         <p>
           La UNI tiene cada día retos mayores en la formación de los profesionales de hoy y del mañana, a través de una educación gratuita, con valores, equidad y formación de paz para sentar las bases del desarrollo y trasformación de la sociedad nicaragüense. 
      </p>
<footer>
<p class="autor">MBA. ING. NESTOR GALLO, RECTOR</p>
<p class="autor">RECTORIA@UNI.EDU.NI</p>
</footer>
</blockquote>

    </div>
  </article>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["ChangePresent"])
  },
  beforeMount() {
    this.ChangePresent(3);
  }
};
</script>
<style scoped>

.container-info {
  width: 80%;
  height: auto;
  margin: 60px 0;
  padding: 50px;
  padding-top: 30px;
  background-color: #ffffff;
  border-radius: 5px;
  color: #3b3b3b;
  box-shadow: 0px 7px 28px 18px rgba(199, 199, 199, 0.171);
}
.container-info:nth-child(2n+1) {
 margin-left: 0;
}

.container-info:nth-child(2n) {
  margin-left: 20%;
}

.container-info > .icon {
  width: 60px;
  margin: 10px 0;
}

.container-info > h1 {
  font-size: 1.4em;
  border-top: solid #0b69ff 2px;
  padding: 10px 0;
  margin-bottom: 0;
}

ul > li {
  margin: 12px 0;
  margin-left: 5%;
  list-style-type: square;
}

.container-info > p {
  font-size: 1em;
  margin-left: 5%;
}

.container-info > blockquote {
  margin-left: 5%;
}

.autor {
  width: 100%;
  text-align: right;
}
@media screen and (max-width: 650px) {
  .container-info {
    width: 70%;
    height: auto;
    padding: 10%;
  }

  .container-info:nth-child(2n+1) {
  margin: 20px 5%;
}

.container-info:nth-child(2n) {
  margin: 20px 5%;
}
}
</style>