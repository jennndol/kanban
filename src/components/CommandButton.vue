<template>
  <fab :actions="fabActions" @cache="cache" @createPost="showModal">
  </fab>
</template>

<script>
import fab from 'vue-fab'

export default {
  components: {
    fab
  },
  data () {
    return {
      bgColor: '#167df0',
      position: 'top-right',
      fabActions: [{
        name: 'createPost',
        icon: 'mode_edit'
      }]
    }
  },
  methods: {
    showModal () {
      let element = document.querySelector('#new-task')
      let classList = element.classList.value.split(' ')
      if (classList.indexOf('is-active') === -1) {
        document.querySelector('#new-task').classList.add('is-active')
      } else {
        document.querySelector('#new-task').classList.remove('is-active')
      }
    }
  }
}
</script>
