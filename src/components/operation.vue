<template>
  <div class="container-fluid">
    <div class="jumbotron">
      <h1 class="">{{ text.title }}</h1>
      <div class="row operation_row">
        <div class="col-sm-6">
          <div class="operation-image">
            <img src="../assets/00.png">
          </div>
        </div>
        <div class="operation-text col-sm-6">
          <p>{{ text.opeList[0] }}</p>
        </div>
      </div>
      <div class="row operation_row">
        <div class="col-sm-6 col-sm-push-6">
          <div class="operation-image-left">
            <img src="../assets/01.png">
          </div>
        </div>
        <div class="operation-text-right col-sm-6 col-sm-pull-6">
          <p>{{ text.opeList[1] }}</p>
        </div>
      </div>
      <div class="row operation_row">
        <div class="col-sm-6">
          <div class="operation-image">
            <img src="../assets/02.png">
          </div>
        </div>
        <div class="operation-text col-sm-6">
          <p>{{ text.opeList[2] }}</p>
        </div>
      </div>
      <div class="row operation_row">
        <div class="col-sm-6 col-sm-push-6">
          <div class="operation-image-left">
            <img src="../assets/03.png">
          </div>
        </div>
        <div class="operation-text-right col-sm-6 col-sm-pull-6">
          <p>{{ text.opeList[3] }}</p>
        </div>
      </div>
      <div class="row operation_row">
        <div class="col-sm-6">
          <div class="operation-image">
            <img src="../assets/04.png">
          </div>
        </div>
        <div class="operation-text col-sm-6">
          <p>{{ text.opeList[4] }}</p>
        </div>
      </div>
      <div class="row operation_row">
        <div class="col-sm-6 col-sm-push-6">
          <div class="operation-image-left">
            <img src="../assets/05.png">
          </div>
        </div>
        <div class="operation-text-right col-sm-6 col-sm-pull-6">
          <p>{{ text.opeList[5] }}</p>
        </div>
      </div>
      <div class="row operation_row">
        <div class="col-sm-6">
          <div class="operation-image">
            <img src="../assets/06.png">
          </div>
        </div>
        <div class="operation-text col-sm-6">
          <p>{{ text.opeList[6] }}</p>
        </div>
      </div>
      <div class="row operation_row">
        <div class="col-sm-6 col-sm-push-6">
          <div class="operation-image-left">
            <img src="../assets/07.png">
          </div>
        </div>
        <div class="operation-text-right col-sm-6 col-sm-pull-6">
          <p>{{ text.opeList[7] }}</p>
        </div>
      </div>
      <p class="next_arrow fadein"><i class="fa fa-angle-double-down" aria-hidden="true"></i></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'operation',
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
$operation_image_size: 300px;

.container-fluid {
  color: $base_color_black;
}

.jumbotron {
  background: $base_color_yellow;
  border-radius: 0;
  min-height: 600px;
}

.operation_row {
  min-height: 200px;
  margin-bottom: 50px;
}

.operation-image,
.operation-image-left{
  background: $base_color_white;
  width: $operation_image_size;
  height: $operation_image_size;
  border-radius: $operation_image_size / 2;
  display: block;
  overflow: hidden;
  margin: 0 auto;

  img {
    width: $operation_image_size;
    height: $operation_image_size;
  }
}

.operation-text,
.operation-text-right {
  padding: 10px;
  text-align: center;
}


@media screen and (min-width: 768px) {
  .operation_row {
    display: flex;
    align-items: center;
  }

  .operation-image {
    float: right;
  }

  .operation-image-left {
    float: left;
  }

  .operation-text {
    text-align: start;
  }

  .operation-text-right{
    text-align: right;
  }
}
</style>
