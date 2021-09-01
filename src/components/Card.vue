<template>

    <div>
        <div class="card" >
            <h3>{{title}}</h3>
            <h6 class="description">{{description}}</h6>
            <h6>{{publishDate}}</h6>
        </div>
  </div>
</template>
<script>
import moment from 'moment';

export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: 'default',
    },
    description: {
      type: String,
      required: true,
    },
    publishDate: {
      type: String,
      required: false,
    },
    computed: {
      formatDate(value) {
        return moment(value).format('MMM Do YYYY');
      },
    },
  },
};
</script>

<style scoped>
.card {
    padding: 32px 32px 54px;
    border: solid 1px #f2f2f2;
    background-color: #ffffff;
    width: 15rem;
    margin: 20px;
    min-height: 20.313rem;
}
.description{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-line-clamp : 3 ;
}

</style>
