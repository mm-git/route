<template>
  <div class="container-fluid">
    <div class="jumbotron">
      <div class="row">
        <div class="col-md-offset-3 col-md-6">
          <h1>{{ text.faq.title }}</h1>
          <div class="support_text">
            <img class="support_image" src="../assets/understand-100.png">
            <p>{{ text.faq.description }}
              <router-link to="faq">{{ text.faq.link }}</router-link>
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-offset-3 col-md-6">
          <h1>{{ text.contact.title }}</h1>
          <div class="support_text">
            <img class="support_image" src="../assets/question-100.png">
            <p>{{ text.contact.description }}
              <a href="https://goo.gl/forms/TgocvOmnW4IsEt1v2" target="_blank">{{ text.contact.link }}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'support',
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
  background: $base_color_gray_dark;
  border-radius: 0;
  min-height: 600px;

  .row {
    margin-bottom: 30px;
  }
}

.support_text {
  margin-left: 50px;
  display: flex;
  align-items: flex-end;
}
</style>
