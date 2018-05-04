<template>
  <div class="sns_facebook">
    <div
        class="fb-share-button"
        data-href="https://code-house.jp/route"
        data-layout="button_count"
        data-size="small"
        data-mobile-iframe="true">
      <a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcode-house.jp%2Froute&amp;src=sdkpreparse">
        share
      </a>
    </div>
  </div>
</template>

<script>
((d, s, id) => {
  const fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  const js = d.createElement(s);
  js.id = id;
  js.src = 'https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.10';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');

export default {
  name: 'facebook',
};
</script>

<style scoped>

</style>
