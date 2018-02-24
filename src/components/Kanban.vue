<template>
  <div>
    <Navbar/>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        BACKLOG
                        <i class="fa fa-2x fa-plus-circle pull-right"></i>
                    </div>
                    <div class="panel-body">
                        <div  v-for="post in backlog" :key="post['.key']">
                            <article>
                                <h3>{{ post.title }}</h3>
                                <p>{{ post.content }}</p>
                                <div class="controller">
                                    <a @click="next(post['.key'], post.status)">Kanan</a>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        TODO
                        <i class="fa fa-2x fa-plus-circle pull-right"></i>
                    </div>
                    <div class="panel-body">
                        <div  v-for="post in todo" :key="post['.key']">
                            <article>
                                <h3>{{ post.title }}</h3>
                                <p>{{ post.content }}</p>
                                <div class="controller">
                                    <a @click="back(post['.key'], post.status)">Kiri</a>
                                    <a @click="next(post['.key'], post.status)">Kanan</a>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        IN PROGRESS
                        <i class="fa fa-2x fa-plus-circle pull-right"></i>
                    </div>
                    <div class="panel-body">
                        <div  v-for="post in inProgress" :key="post['.key']">                        
                            <article>
                                <h3>{{ post.title }}</h3>
                                <p>{{ post.content }}</p>
                                <div class="controller">
                                    <a @click="back(post['.key'], post.status)">Kiri</a>
                                    <a @click="next(post['.key'], post.status)">Kanan</a>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="panel panel-success">
                    <div class="panel-heading">
                        DONE
                        <i class="fa fa-2x fa-plus-circle pull-right"></i>
                    </div>
                    <div class="panel-body">
                        <div  v-for="post in done" :key="post['.key']">                                                
                            <article>
                                <h3>{{ post.title }}</h3>
                                <p>{{ post.content }} {{post.status}}</p>
                                <div class="controller">
                                    <a @click="back(post['.key'], post.status)">Kiri</a>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {{posts}}
    <input type="text" v-model="form.title">
    <input type="text" v-model="form.content">
    <input type="text" v-model="form.assignedTo">
    <input type="text" v-model="form.status">
    <button @click="addPost">TEST</button>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  name: 'Kanban',
  components: {
      Navbar
  },
  data () {
    return {
      posts: null,
      form: {
          title: null,
          content: null,
          assignedTo: null,
          status: null
        }
    }
  },
  firebase () {
    return {
      posts: this.$fb.ref('posts')
    }
  },
  computed: {
    backlog () {
      return this.posts.filter(post => post.status == 0)
    },
    todo () {
      return this.posts.filter(post => post.status == 1)
    },
    inProgress () {
      return this.posts.filter(post => post.status == 2)        
    },
    done () {
      return this.posts.filter(post => post.status == 3)        
    }
  },
  methods: {
    addPost () {
      this.$fb.ref('posts').push(this.form)
      this.form.title = null
      this.form.content = null
      this.form.assignedTo = null
      this.form.status = null
    },
    next(id, status){
        let newStatus = Number(status) + 1
        if (newStatus > 3){
            newStatus = 3
        }
        this.$fb.ref('posts').child(id).child('status').set(newStatus)
    },
    back(id, status){
      let newStatus = Number(status) - 1
      if (newStatus < 0){
          newStatus = 0
      }
      this.$fb.ref('posts').child(id).child('status').set(newStatus)
    }
  }
}
</script>

<style scoped>
.panel-body{
    background-color: #f0f0f0;
}
article{
    cursor: pointer;
    background-color: #fff;
    padding-left: 0.5em;
    margin-bottom: 1em;
    padding-top: 0.5em;
    box-shadow: 1px 1px 2px 0px rgba(50, 50, 50, 0.5);
    border-radius: 5px;
}

</style>
