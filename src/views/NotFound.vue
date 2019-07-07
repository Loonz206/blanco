<template>
  <section>
    <div class="not-found-container">
      <h1>{{ translations.notFound }}</h1>
      <p>{{ translations.sorryComment }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Not Found",
  data() {
    return {
      translations: {
        notFound: "Not Found",
        sorryComment:
          "Sorry, but the page you were trying to view does not exist."
      }
    };
  }
};
</script>

<style lang="scss">
@import "../scss/variables.scss";
@import "../scss/mixins.scss";
@import "../scss/typography.scss";
section {
  color: #888;
  display: table;
  font-family: $sansSerif;
  height: 100%;
  text-align: center;
  width: 100%;
}
.not-found-container {
  display: table-cell;
  vertical-align: middle;
  margin: 2em auto;
}
h1 {
  color: #555;
  font-size: 2em;
  font-weight: 400;
}

p {
  margin: 0 auto;
  width: 280px;
}

@media only screen and (max-width: 280px) {
  body,
  p {
    width: 95%;
  }

  h1 {
    font-size: 1.5em;
    margin: 0 0 0.3em;
  }
}
</style>
