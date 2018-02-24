<template>
  <div>
    <Navbar/>
    <command-button/>
    <div class="row content">
    <new-task style="margin-bottom: 3em; text-align:center;"/>      
      <div class="columns is-multiline">
        <div class="column">
          <Panel :posts="backlog" title="BACKLOG" color="#ff3860"/>
        </div>
        <div class="column">
          <Panel :posts="todo" title="TODO" color="#209cee"/>
        </div>
        <div class="column">
          <Panel :posts="inProgress" title="IN PROGRESS" color="#ffdd57"/>
        </div>
        <div class="column">
          <Panel :posts="done" title="DONE" color="#23d160"/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import NewTask from './NewTask.vue'
import Navbar from './Navbar.vue'
import Panel from './Panel.vue'
import CommandButton from './CommandButton'
import Footer from './Footer'

export default {
  name: 'Kanban',
  components: {
    Navbar,
    Panel,
    NewTask,
    CommandButton,
    Footer
  },
  firebase() {
    return {
      posts: this.$fb.ref('posts')
    }
  },
  computed: {
    backlog() {
      return this.posts.filter(post => post.status === 0)
    },
    todo() {
      return this.posts.filter(post => post.status === 1)
    },
    inProgress() {
      return this.posts.filter(post => post.status === 2)
    },
    done() {
      return this.posts.filter(post => post.status === 3)
    }
  }
}
</script>

<style scoped>
  .content {
    padding: 1em;
  }
</style>
