<template>
 <div>
   <h3 id="title">{{title}}</h3>
   <label for="book"></label>
   <input id="book" v-model="book" />
   <br/>
   <label for="amount"></label>
<!--   TWO WAY BINDING-->
   <input id="amount" v-model="amount" />
   <br/>
   <p>{{pesan}}</p>
   <br/>
   <p>{{fullname}}</p>
   <br/>
   <p>{{sumAmount()}}</p>
   <p>{{property}}</p>
 </div>
</template>

<script>

import { EventBus } from '@/main';
import exampleMixin from '@/mixins/exampleMixin';

export default {
  name: 'Onboarding',
  data() {
    return {
      amount: 10,
      array: [],
      objects: {},
      message: null,
      book: null,
      pesan: null,
      fullname: null,
    };
  },
  props: {
    title: {
      type: String,
      required: false,
      default: 'ONBOARDING PAGE',
    },
    printMessage: {
      type: Function,
      required: false,
      default: () => {},
    },
  },
  methods: {
    methodCreated() {
      console.log('created');
    },
    checkAmount() {
      if (this.amount > 10) {
        this.message = 'Stok melebih batas!';
      }
      if (this.amount <= 10) {
        this.message = 'Stok mencukupi';
      }
      this.pesan = this.printMessage(this.message);
    },
  },
  computed: {
  },
  beforeCreate() {
  },
  created() {
    console.log('created onboarding');
    EventBus.$on('printFullname', (debiturName) => {
      console.log(debiturName);
      if (debiturName === 'KAHFI') {
        this.fullname = 'KAHFI DEL VIERI';
      }
      if (debiturName === 'MALA') {
        this.fullname = 'DEWI AYU NIRMALASARI';
      }
    });
  },
  beforeMount() {
  },
  mounted() {
    console.log('mounted onboarding');
  },
  beforeUpdate() {
  },
  updated() {
  },
  watch: {
    amount: {
      handler() {
        this.checkAmount();
      },
    },
    book(newValue, oldValue) {
      console.log(newValue, oldValue);
    },
  },
  beforeDestroy() {
    console.log('destroy onboarding');
    EventBus.$off('printFullname');
  },
  mixins: [exampleMixin],
};
</script>

<style scoped>

</style>
