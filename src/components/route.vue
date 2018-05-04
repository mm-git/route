<template>
  <div>
    <Top/>
    <Feature/>
    <Operation/>
    <Graph/>
    <Cuesheet/>
    <Support/>
    <Foot/>
  </div>
</template>

<script>
import Top from './top';
import Feature from './feature';
import Operation from './operation';
import Graph from './graph';
import Cuesheet from './cuesheet';
import Support from './support';
import Foot from './foot';

export default {
  name: 'route',
  components: {
    Top,
    Feature,
    Operation,
    Graph,
    Cuesheet,
    Support,
    Foot,
  },
};
</script>

<style scoped>

</style>
