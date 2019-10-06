<template>
  <client-only>
    <commentTable :thead="['Name', 'Text', 'Status', 'Change status', 'Delete']">
      <tbody slot="tbody">
        <tr v-for="comment in comments" :key="comment.name">
          <td>
            <span>{{comment.name}}</span>
          </td>
          <td>
            <span>{{comment.text}}</span>
          </td>
          <td>
            <span v-if="comment.publish" class="status true">Publish</span>
            <span v-else class="status false">Hiden</span>
          </td>
          <td>
            <span class="link" @click="changeStatus(comment)">Change status</span>
          </td>
          <td>
            <span class="link" @click="deleteComment(comment.id)">Delete</span>
          </td>
        </tr>
      </tbody>
    </commentTable>
  </client-only>
</template>

<script>
import commentTable from "@/components/Admin/CommentTable";
import axios from "axios";

export default {
  components: {
    commentTable
  },
  layout: "admin",
  mounted() {
    this.loadComments();
  },

  data() {
    return {
      comments: []
    };
  },
  methods: {
    changeStatus(comment) {
      var updatedPublishValue = !comment.publish;
      axios
        .put(
          `https://fbtest-228.firebaseio.com/comments/${comment.id}/publish.json`,
          updatedPublishValue
        )
        .then(res => {
          comment.publish = res.data;
        });
    },
    deleteComment(id) {
      axios
        .delete(`https://fbtest-228.firebaseio.com/comments/${id}.json`)
        .then(res => {
          if (res.status == 200) {
            let deletedIndex = this.comments.findIndex(
              comment => (comment.id = id)
            );
            this.comments.splice(deletedIndex, 1);
          }
        });
    },
    loadComments() {
      axios.get(`https://fbtest-228.firebaseio.com/comments.json`).then(res => {
        let commentsRes = [];
        Object.keys(res.data).forEach(key => {
          const comment = res.data[key];
          commentsRes.push({ ...comment, id: key });
          this.comments = commentsRes;
        });
      });
    }
  }
};
</script>
