<template>
  <section>
    <b-collapse class="panel" :open.sync="isOpen">
      <div slot="trigger" class="panel-heading" :style="{backgroundColor: color}">
        <center><strong style="color: #FFFFFF;">{{ title }}</strong></center>
      </div>
      <div class="panel-block" v-for="post in posts" :key="post['.key']">
        <Post :post="post" />
      </div>
    </b-collapse>
  </section>
</template>

<script>
import Post from './Post'
export default {
  props: ['posts', 'title', 'color'],
  components: {
    Post
  },
  data () {
    return {
      isOpen: true
    }
  }
}
</script>
