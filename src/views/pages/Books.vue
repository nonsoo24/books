<template>
    <div>
      <div class="row">
          <Card
           v-for="(book, i) in lists"
            :key="i"
            :title="book.title"
            :description="book.description"
            :publishDate="book.publishDate"
          />
      </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
import Card from '../../components/Card.vue';

export default {
  components: {
    Card,
  },
  data() {
    return {
      lists: [],
      pageCount: 0,
    };
  },
  mounted() {
    this.fetchAllBooks();
  },

  methods: {
    ...mapActions({
      getAllBooks: 'getBookList',
    }),
    async fetchAllBooks() {
      try {
        const response = await this.getAllBooks();
        const { status, data } = response;
        if (status === 200) {
          this.lists = data;
        }
      } catch (error) {
        alert(error);
      }
    },
  },

};
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}
.card {
  margin: 30px
}

</style>
