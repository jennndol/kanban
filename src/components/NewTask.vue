<template>
  <div class="modal" id="new-task">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Create Post</p>
        <button class="delete" aria-label="close" @click="showModal"></button>
      </header>
      <section class="modal-card-body">
  
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" v-model="form.title">
          </div>
        </div>
  
        <div class="field">
          <label class="label">Content</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" v-model="form.content">
          </div>
        </div>
  
        <div class="field">
          <label class="label">Assigned To</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" v-model="form.assignedTo">
          </div>
        </div>
  
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" v-on:click="handler">Save changes</button>
        <button class="button" v-on:click="showModal">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          title: null,
          content: null,
          assignedTo: null,
          progress: 0,
          status: 0
        }
      }
    },
    methods: {
      addPost() {
        this.$fb.ref('posts').push(this.form)
        this.form.title = null
        this.form.content = null
        this.form.assignedTo = null
        this.$swal("Great!", "Create post success!", "success")
      },
      showModal() {
        let element = document.querySelector('#new-task')
        let classList = element.classList.value.split(' ')
        if (classList.indexOf('is-active') === -1) {
          document.querySelector('#new-task').classList.add('is-active')
        } else {
          document.querySelector('#new-task').classList.remove('is-active')
        }
      },
      handler(){
        this.addPost()
        this.showModal()
      }
    }
  }
</script>

<style>
  
</style>

