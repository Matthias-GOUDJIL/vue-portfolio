<template>
  <div class="about">
    <div id="presentation-card">
      <img
        :src="src"
        :alt="alt"
      >
      <h3 id="title">{{ title }}</h3>
      <p id="subtitle">{{ subtitle }}</p>
      <p id="content">{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: require("../../assets/img/profil.jpg"),

      title: "Intégrateur et developpeur web junior",

      subtitle:
        "Passionné par les nouvelles technologies, internet et tout ce qui touche de près ou de loin à l'informatique.",

      content: `"J'ai décidé au début de l'année 2018 d'entreprendre une reconversion professionnelle en suivant une formation "développeur web" chez ARINFO.
      Cette formation intensive labellisée Grande Ecole du Numérique et orientée projets (80% de pratique), m'a permis d'acquérir de vraies compétences en tant que développeur junior ou intégrateur web."`,

      alt: "profil.jpg"
    };
  }
};
</script>

<style lang="scss" >
@import "../../styles/views/pages/about.scss";
</style>
