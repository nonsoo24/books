<template>
    <div>
      <div class="search-box">
        <BInput
          v-model="searchQuery"
          type="text"
          id="search"
          placeholder="Search books"
          class="search-input"
        />
      </div>

      <div class="row">
          <Card
           v-for="(book, i) in searchBookList"
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
import BInput from '../../components/TextInput.vue';

export default {
  components: {
    Card,
    BInput,
  },
  data() {
    return {
      searchQuery: null,
      bookList: [],
      pageCount: 0,
    };
  },
  computed: {
    searchBookList() {
      if (this.searchQuery) {
        return this.bookList.filter(
          (item) => item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        || item.publishDate.toLowerCase().includes(this.searchQuery.toLowerCase()),
        );
      }
      return this.bookList;
    },
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
          this.bookList = data;
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
  margin-top: 40px;
}
.search-box {
  margin: 0 auto;
  display: block;
  padding-top: 40px;
}
.search-input{
   width: 100%;
}

</style>
