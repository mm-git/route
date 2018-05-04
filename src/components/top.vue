<template>
  <div class="container-fluid">
    <div class="jumbotron">
      <div class="row">
        <div class="col-lg-12 text-center title_logo">
          <img class="align-baseline" src="../assets/logo-50.png">CODE HOUSE presents
        </div>
      </div>
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
      <div class="row">
        <div class="col-lg-offset-1 col-lg-4">
          <h1 class="title_app_name">Route</h1>
        </div>
        <div class="col-lg-6 title_summary">
          <p>
            <img class="title_image" src="../assets/finger-40.png">{{ text.summary[0] }}<br/>
            <img
                    class="title_image align-baseline"
                    src="../assets/zoom-40.png">
            {{ text.summary[1] }}<br/>
            <span class="title_turn">4</span>{{ text.summary[2] }}<br/>
            <span class="title_new">★</span>{{ text.summary[3] }}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-offset-2 col-lg-8 col-xs-offset-1 col-xs-10 title_download_frame">
          <p class="title_download text-center">{{ text.download }}</p>
          <p class="text-center">
            <a href="https://goo.gl/6weyFv" target="_blank"><img src="../assets/download.svg"></a>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-offset-7 col-md-4 col-sm-offset-6 col-sm-6 col-xs-offset-1 col-xs-10">
          <ul class="sns_icons">
            <li><Facebook/></li>
            <li><Twitter/></li>
            <li><Google/></li>
            <li><LinkedIn/></li>
            <li><Hatena/></li>
            <li><Pocket/></li>
          </ul>
        </div>
      </div>
      <p class="next_arrow"><i class="fa fa-angle-double-down" aria-hidden="true"></i></p>
    </div>
  </div>
</template>

<script>
import Facebook from './share/facebook';
import Twitter from './share/twitter';
import Google from './share/google';
import LinkedIn from './share/linkedin';
import Hatena from './share/hatena';
import Pocket from './share/pocket';

export default {
  name: 'top',
  components: {
    Facebook,
    Twitter,
    Google,
    LinkedIn,
    Hatena,
    Pocket,
  },
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
$icon_size: 90px;
$title_image_size: 40px;

.container-fluid {
  color: $base_color_white;
}

.jumbotron {
  background: url(../assets/title_back.png) no-repeat;
  background-size: cover;
  border-radius: 0;
  min-height: 600px;
  padding-top: 20px;

  .row {
    margin-bottom: 30px;
  }
}

.title_logo {
  font-family: 'Jaldi', sans-serif;
}

.title_app_name {
  position: relative;
  padding-left: $icon_size + 10px;
  padding-top: $icon_size - 40px;
  font-family: 'Jaldi', sans-serif;

  &:before {
    content: "";
    display: block;
    width: $icon_size;
    height: $icon_size;
    background: url(../assets/icon-200.png) no-repeat;
    background-size: $icon_size $icon_size;
    border-radius: $icon_size/6;
    position: absolute;
    top: 0;
    left: 0;
  }
}

.title_summary {
  position: relative;

  & p{
    line-height: $title_image_size+10px;
  }

  .title_new {
    color: $base_color_yellow;
  }
}

.title_image {
  width: $title_image_size;
  height: $title_image_size;
  margin: 0 5px;
}

.title_turn {
  background: $base_color_gray_dark;
  border-radius: $border_radius;
  color: $base_color_white;
  display: inline-block;
  font-family: "NumberArrow", serif;
  font-size: $title_image_size - 4px;
  height: $title_image_size;
  line-height: $title_image_size;
  text-align: center;
  width: $title_image_size;
  margin: 0 5px;
}

.title_download_frame {
  border: dashed 3px $base_color_white_a65;
  border-radius: 10px;
  padding: 5px;
}

p.title_download{
  font-size: 180%;
}

@media screen and (min-width: 768px) {
  .title_app_name {
    padding-left: ($icon_size + 10px)*2;
    padding-top: ($icon_size - 40px)*2;

    &:before {
      width: $icon_size * 2;
      height: $icon_size * 2;
      background: url(../assets/icon-200.png) no-repeat;
      background-size: $icon_size*2 $icon_size*2;
      border-radius: $icon_size / 3;
    }
  }

  .title_summary {
    position: relative;

    & p{
      bottom: 0;
    }
  }

  .title_image {
    margin: 0 10px;
  }

  .title_turn {
    margin: 0 10px;
  }

  p.title_download{
    font-size: 350%;
  }
}
</style>
