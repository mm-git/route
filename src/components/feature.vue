<template>
  <div class="container-fluid">
    <div class="jumbotron">
      <h1 class="">{{ text.title }}</h1>
      <p class="text-center"><img class="feature_ipad" src="../assets/ipad_iphone.png"></p>
      <div class="row">
        <div class="col-md-10 col-md-offset-1">
          <ol class="feature_list">
            <li v-for="(feature, key, index) in text.featureList" :key="index">{{ feature }}</li>
          </ol>
        </div>
      </div>

      <p class="next_arrow fadein"><i class="fa fa-angle-double-down" aria-hidden="true"></i></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'feature',
  data() {
    return {
      text: this.$t(this.$options.name),
    };
  },
  methods: {
    refreshText(locale) {
      this.$i18n.locale = locale || 'en';
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
.container-fluid {
  color: $base_color_black;
}

.jumbotron {
  background-image: url(../assets/map.png);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0;
  min-height: 600px;
}

h1 {
  margin-bottom: 20px;
}

.feature_ipad {
  width: 80vw;
  //border-radius: 2.7vw;
  box-shadow:10px 10px 20px 3px rgb(87,87,87), -3px -3px 20px 0 rgb(87,87,87);
  margin-bottom: 30px;
}

.feature_list {
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

@media screen and (min-width: 768px) {
  .feature_ipad {
    width: 60vw;
  }
}
</style>
