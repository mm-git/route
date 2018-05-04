<template>
  <div class="container-fluid">
    <div class="jumbotron">
      <h1 class="">{{ text.title }}</h1>
      <div class="row cuesheet_first_row">
        <div class="col-lg-offset-1 col-lg-4 text-center">
          <img class="cuesheet_image" src="../assets/cue.png">
        </div>
        <div class="col-lg-5 text-left">
          <ol class="cuesheet_list">
            <li v-for="(desc, key, index) in text.descList" :key="index">{{ desc }}</li>
          </ol>
        </div>
      </div>

      <p class="next_arrow fadein"><i class="fa fa-angle-double-down" aria-hidden="true"></i></p>

      <div class="row">
        <div class="col-lg-offset-2 col-lg-8 col-xs-offset-1 col-xs-10 cuesheet_download_frame">
          <p class="cuesheet_download text-center">{{ text.download }}</p>
          <p class="text-center">
            <a href="https://goo.gl/6weyFv" target="_blank"><img src="../assets/download.svg"></a>
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'cuesheet',
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
.container-fluid{
  color: $base_color_black;

  & a {
    color: $base_color_yellow;
  }
}


.jumbotron {
  background: $base_color_red;
  border-radius: 0;
  min-height: 600px;
}

.cuesheet_first_row {
  margin-bottom: 50px;
}

.cuesheet_image {
  width: 310px;
  border-radius: 10px;
  box-shadow:10px 10px 20px 3px rgba(87,87,87,0.3), -3px -3px 20px 0 rgba(87,87,87,0.3);
}

.cuesheet_list {
  counter-reset:list;
  list-style-type:none;
  padding: 50px 0;
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
   background: $base_color_yellow_light;
   position: absolute;
   left: 0;
   width: 30px;
   text-align: center;
   border-radius: 15px;
 }
}
}

.cuesheet_pacenote_image {
  width: 200px;
  border-radius: 30px;
  box-shadow:10px 10px 20px 3px rgba(87,87,87,0.3), -3px -3px 20px 0 rgba(87,87,87,0.3);
  display: block;
  margin: 30px auto;
}

.cuesheet_pacenote_text {
  font-size:22px;
  padding: 50px;
}

.cuesheet_export_image {
  margin: 0 5px;
  border-radius: 5px;
}

.cuesheet_download_frame {
  border: dashed 3px $base_color_black;
  border-radius: 10px;
  padding: 5px;
}

p.cuesheet_download{
  font-size: 200%;
}

@media screen and (min-width: 768px) {
  p.cuesheet_download {
    font-size: 350%;
  }
}
</style>
