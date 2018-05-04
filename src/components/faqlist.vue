<template>
  <div class="container-fluid">
    <div class="jumbotron">
      <a href="javascript:history.go(-1)"><i class="fa fa-arrow-left"></i>{{ text.back }}</a>
      <h1>FAQ</h1>
      <div class="row">
        <div class="col-md-offset-7 col-md-4 col-sm-offset-6 col-sm-6 col-xs-offset-1 col-xs-10">
          <ul class="sns_icons">
            <li>
              <router-link to="ja">
                <flag iso="jp" />
              </router-link>
            </li>
            <li>
              <router-link to="en">
                <flag iso="gb" />
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <p><img src="../assets/understand-100.png">{{ text.title }}</p>
      <div class="row" v-for="(qa, key, index) in text.qaList" :key="index">
        <div class="col-xs-offset-1 col-xs-10 faq_frame">
          <p class="faq_question">{{ qa.q }}</p>
          <p class="faq_answer">{{ qa.a }}</p>
        </div>
      </div>
      <a href="javascript:history.go(-1)"><i class="fa fa-arrow-left"></i>{{ text.back }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'faqlist',
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
  color: $base_color_black;
}

.jumbotron {
  background: $base_color_gray_light;
  border-radius: 0;
  min-height: 600px;

  .row {
    margin-bottom: 50px;
  }
}

.faq_frame {
  border: $base_color_gray 3px dashed;
  border-radius: 10px;
  padding: 20px;
}

.faq_question {
  font-size: 20px;
  text-decoration: underline;

  &:before {
    background: $base_color_blue_light;
    content: "Q";
    font-family: "Jaldi", sans-serif;
    margin-right: 15px;
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    float: left;
  }
}

.faq_answer {
  font-size: 16px;
  margin: 0 30px;
}

@media screen and (min-width: 768px) {
  .faq_frame {
    padding: 30px;
  }

  .faq_question {
    font-size: 30px;

    &:before {
      margin-right: 20px;
      width: 40px;
      height: 40px;
      line-height: 40px;
      border-radius: 20px;
    }
  }

  .faq_answer {
    font-size: 20px;
    margin: 0 60px;
  }
}
</style>
