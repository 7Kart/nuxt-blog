<template>
    <section class="post">
      <div class="container">
        <div class="post-header">
          <img :src="post.img" :alt="post.title" />
          <h1 class="title">{{post.title}}</h1>
          <p>{{post.description}}</p>
        </div>

        <!-- body -->
        <div class="post-body">          
          <VueMarkdown :source="post.content" class="result-mark-down"></VueMarkdown>
        </div>

      </div>
    </section>
</template>

<script>
export default {
    props:{
        post:{
            type: Object,
            required: true
        }
    }    
}
</script>