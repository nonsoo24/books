<template>
    <div>
        <Card /> 
    </div>
</template>
<script>
import Card from '../../components/Card.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    Card,
  },
  data() {
    return {
      bookList: [],
      pageCount: 0
    }
  },
  mounted() {
    this.fetchAllBooks()
  },

  methods: {
    ...mapActions({
      getAllBooks: 'getBookList',
    }),
    async fetchAllBooks() {
      try {
        const response = await this.getAllBooks()
        console.log(response);
        // const { status, data } = response
        // if (status === 200) {
        //   this.bookList = data.data
        //   this.pageCount = data.pageCount
        // }
      } catch (error) {
       alert(error)
      }
    },
  },

};
</script>

<style scoped>
.card-toggle {
  display: flex;
  flex-wrap: wrap;
}

.list-toggle {
  display: block;
}
.list-date {
  color: #999;
}

.card-img {
  display: block;
}

.list-img {
  display: none;
}

.card-width {
  width: 15rem;
}

.news_card_wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 15rem;
  overflow: hidden;
}

.news_card_caption-list {
  padding: 1rem;
  color: #000;
  text-align: left;
}

.news_card_date {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.5rem;
  color: #ffffff;
  background: #006ba6;
}

.news_card_date .date-display-single {
  color: #ffffff !important;
}

.news_card_date .date-display-single:before {
  content: "" !important;
  margin-right: 0 !important;
}

.news_card_caption {
  justify-content: left;
  padding: 0.75rem 1rem;
  padding: 1rem;
  color: #000;
}

.toggle-wrapper > img {
  cursor: pointer;
}
.card__transaction {
    padding: 32px 32px 54px;
    border: solid 1px #f2f2f2;
    background-color: #ffffff;
    min-width: 305px;
}
</style>