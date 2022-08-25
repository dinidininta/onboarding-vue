<template>
  <div>
    <h3 id="title">Informasi Debitur</h3>
    <label for="debiturName"></label>
    <input id="debiturName" v-model="debiturName" @change="setFullname"/>
    <br/>
    <p>{{property}}</p>
  </div>
</template>

<script>

import { EventBus } from '@/main';
import exampleMixin from '@/mixins/exampleMixin';

export default {
  name: 'InformasiDebitur.vue',
  data() {
    return {
      debiturName: null,
    };
  },
  methods: {
    setFullname() {
      EventBus.$emit('printFullname', this.debiturName);
      this.sumAmount();
    },
  },
  mixins: [exampleMixin],
};
</script>

<style scoped>

</style>
