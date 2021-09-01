<template>

    <div>
        <div class="card" >
            <h3>{{title}}</h3>
            <h6 class="description">{{description}}</h6>
            <h6>{{formatDate(publishDate)}}</h6>
        </div>
  </div>
</template>
<script>
import formatDate from '../helpers/formatDate';

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
  },
  methods: {
    formatDate,
  },
};
</script>

<style scoped>
.card {
    padding: 2rem 2rem 3.375rem;
    border: solid 0.0625rem #f2f2f2;
    background-color: #ffffff;
    width: 15rem;
    margin: 1.25rem;
    min-height: 20.313rem;
}
.description{
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp : 10 ;
  -webkit-box-orient : vertical ;
}

</style>
