<template>
  <div>  
    <h1>{{ title }}</h1>
    <!--
    <input type="text" ref="name">
    <button @click="handleClick">Click Me</button>
    -->
    <teleport to=".modals" v-if="showModal">
      <Modal theme='sales' @close="toggleModal">
        <template v-slot:links>
          <a href="#">Sign up now</a>
          <a href="#">More info</a>
        </template>
        <h1>{{header}}</h1>
        <p>{{text}}</p>
      </Modal>
    </teleport>

    <div v-if="showModalTwo">
      <Modal @close="toggleModalTwo">
        <h1 href="#">Sign up for free newsletter</h1>
        <a href="#">More info</a>
      </Modal>
    </div>

    <button @click="toggleModal">Open Modal</button>
    <button @click="toggleModalTwo">Open Modal 2</button>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal,
  },
  data() {
    return {
      title: 'My First Vue App',
      header: 'Sign up for the giveaway!',
      text: 'Grab your phone %20 off',
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    /*handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    }*/
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    }
  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px; 
}
</style>
