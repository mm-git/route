<template>
  <div class="container-fluid">
    <div class="jumbotron">
      <h1 class="">{{ text.title }}</h1>
      <p class="text-center"><img class="graph_graph" src="../assets/graph.png"></p>
      <div class="row">
        <div class="col-md-10 col-md-offset-1">
          <ol class="graph_list">
            <li v-for="(desc, key, index) in text.descList" :key="index">{{ desc }}</li>
          </ol>
        </div>
      </div>
      <p class="next_arrow fadein"><i class="fa fa-angle-double-down" aria-hidden="true"></i></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'graph',
  data() {
    return {
      text: this.$t(this.$options.name),
    };
  },
  methods: {
    refreshText(locale) {
      if (locale !== undefined) {
        this.$i18n.locale = locale;
      }
      this.text = this.$t(this.$options.name);
    },
  },
  watch: {
    $route(to) {
      this.refreshText(to.params.lang);
    },
  },
  mounted() {
    this.refreshText(this.$route.params.lang);
  },
};
</script>

<style scoped lang="scss">
.container-fluid{
  color: $base_color_white;
}

.jumbotron {
  background: $base_color_black;
  border-radius: 0;
  min-height: 600px;
}

.graph_graph {
  width: 80vw;
  border-radius: $border_radius;
  opacity: 0.8;
}

.graph_list {
  counter-reset:list;
  list-style-type:none;
  padding:0;
  font-size:22px;

  li{
    margin-bottom: 8px;
    line-height: 1.5em;
    position: relative;
    padding-left: 40px;

    &:before{
     counter-increment: list;
     content: counter(list);
     color: $base_color_black;
     background: $base_color_white;
     position: absolute;
     left: 0;
     width: 30px;
     text-align: center;
     border-radius: 15px;
   }
  }
}
</style>
