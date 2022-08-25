<template>
  <div class="about">
<!--    About => Onboarding -->
    <h1>This is an about page</h1>
    <button @click="setRender">RENDER</button>
    <Onboarding v-if="render" :title="parentTitle" :print-message="printMessage"></Onboarding>
    <InformasiDebitur v-if="!render"></InformasiDebitur>
  </div>
</template>

<script>
import Onboarding from '@/components/Onboarding.vue';
import InformasiDebitur from '@/components/InformasiDebitur.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'About',
  components: {
    Onboarding,
    InformasiDebitur,
  },
  data() {
    return {
      message: null,
      name: 'Kahfi',
      render: true,
    };
  },
  created() {
  },
  methods: {
    printMessage(message) {
      return `${message}: ${this.name}`;
    },
    setRender() {
      this.render = !this.render;
    },
  },
  computed: {
    ...mapGetters(['parentTitle']),
  },
};
</script>
