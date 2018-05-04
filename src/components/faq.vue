<template>
  <div>
    <Faqlist/>
    <Foot/>
  </div>
</template>

<script>
import Faqlist from './faqlist';
import Foot from './foot';

export default {
  name: 'faq',
  components: {
    Faqlist,
    Foot,
  },
};
</script>

<style scoped>

</style>
