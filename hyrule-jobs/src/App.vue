<template>
  <div class="app">
    <header>
      <div class="title">
        <img src="./assets/heart.svg" alt="site logo" />
        <h1>Hyrule Jobs</h1>
      </div>
      <div class="order">
        <button @click="handleClick('title')">Order by title</button>
        <button @click="handleClick('salary')">Order by salary</button>
        <button @click="handleClick('location')">Order by location</button>
        <JobList :jobs="jobs" :order="order" />
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import Job from './types/Job';
import OrderTerm from './types/OrderTerm'
import JobList from './components/JobsList.vue';

export default defineComponent({
  name: 'App',
  components: { JobList },
  setup() {
    
    const jobs = ref<Job[]>([
      { title: 'farmer', location: 'Erzincan', salary: 5000, id:'1' },
      { title: 'bakkal', location: 'Erzincan', salary: 5000, id:'2' },
      { title: 'milker', location: 'İstanbul', salary: 6000, id:'3' },
      { title: 'crier', location: 'Erzincan', salary: 5000, id:'4' },
      { title: 'founder', location: 'Erzincan', salary: 12000, id:'5' }
    ])  

    const order = ref<OrderTerm>('title')

    const handleClick = (term: OrderTerm) => {
      order.value = term
    }

    return { jobs, handleClick, order }
  }

});
</script>

<style>
  header {
    text-align: center;
  }
  header .order {
    margin-top: 20px;
  }
  button {
    margin: 0 10px;
    color: #1195c9;
    border: 3px solid #1195c9;
    background: #d5f0ff;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
  header .title {
    display: flex;
    justify-content: center;
  }
  header img {
    width: 60px;
    margin-right: 20px;
  }
  header h1 {
    font-size: 3em;
  }
</style>
