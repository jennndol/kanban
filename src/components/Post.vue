<template>
  <section style="width: 100%">
    <b-collapse class="card">
      <div class="card-header">
        <p class="card-header-title">
          {{ post.title }}
        </p>
        <span class="tag is-primary is-medium is-pulled-right" title="Assigned To">{{ post.assignedTo }}</span>
      </div>
      <div class="card-content">
        <div class="content">
          {{ post.content }}
          <div class="well">
            <progress class="progress is-primary is-medium" :value="post.progress" max="100"></progress>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <span class="card-footer-item pointer" @click="back(post['.key'], post.status)"><i class="material-icons">keyboard_arrow_left</i></span>
        <span class="card-footer-item pointer" @click="deletePost(post['.key'])"><i class="material-icons">delete</i></span>
        <span class="card-footer-item pointer" @click="next(post['.key'], post.status)"><i class="material-icons">keyboard_arrow_right</i></span>
      </footer>
    </b-collapse>
  
  </section>
</template>

<script>
  export default {
    props: ['post'],
    methods: {
      deletePost(id) {
        this.$fb
          .ref('posts')
          .child(id)
          .remove()
      },
      next(id, status) {
        let newStatus = Number(status) + 1
        if (newStatus > 3) {
          newStatus = 3
        }
        this.$fb
          .ref('posts')
          .child(id)
          .child('status')
          .set(newStatus)
        this.$fb
          .ref('posts')
          .child(id)
          .child('progress')
          .set((newStatus) / 3 * 100)
      },
      back(id, status) {
        let newStatus = Number(status) - 1
        if (newStatus < 0) {
          newStatus = 0
        }
        this.$fb
          .ref('posts')
          .child(id)
          .child('status')
          .set(newStatus)
        this.$fb
          .ref('posts')
          .child(id)
          .child('progress')
          .set((newStatus) / 3 * 100)
      }
    }
  }
</script>

<style scoped>
  .tag {
    margin-right: 0.5em;
    margin-top: 0.5em;
    cursor: pointer;
  }
  
  .ponter {
    cursor: pointer;
  }
  
  .well {
    margin-top: 1em;
  }
</style>
