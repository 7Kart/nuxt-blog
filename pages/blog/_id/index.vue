<template>
  <div class="wrapper-content wrapper-content--fixed">
    <post :post="post" />
    <comments :comments="comments" />
    <new-comment :postId="$route.params.id" />
  </div>
</template>

<script>
import post from "@/components/blog/Post";
import newComment from "@/components/Comments/NewComment";
import comments from "@/components/Comments/Comments";
import axios from "axios";

export default {
  components: {
    post,
    newComment,
    comments
  },
  head() {
    let title = this.post.title,
      descr = this.post.description,
      type = "article",
      img = this.post.title;
    return {
      title: title,
      meta: [
        { hid: "og:title", name: "og:title", content: title },
        { hid: "description", name: "description", content: descr },
        { hid: "og:description", name: "og:description", content: descr },
        { hid: "og:type", name: "og:type", content: type },
        { hid: 'og:img', name: "og:img", content: img}
      ]
    };
  },
  async asyncData(context) {
    let [post, comments] = await Promise.all([
      axios.get(
        `https://fbtest-228.firebaseio.com/posts/${context.params.id}.json`
      ),
      axios.get(`https://fbtest-228.firebaseio.com/comments.json`)
    ]);

    let commentsRes = Object.values(comments.data).filter(
      comment => comment.postId == context.params.id && comment.publish == true
    );

    return {
      post: post.data,
      comments: commentsRes
    };
  }
};
</script>

<style lang="scss">
.post {
  max-width: 900px;
  margin: 0 auto;
}

.post-header {
  text-align: center;
  margin-bottom: 30px;
  img {
    margin-bottom: 16px;
    max-width: 400px;
  }
  p {
    color: #999;
  }
}

.post-body {
  text-align: left;
}
</style>