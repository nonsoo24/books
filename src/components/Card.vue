<template>

    <div>
        <div class="card" >

        </div>
  </div>
</template>
<script>

export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: 'default',
    },
    description: {
      type: String,
      required: false,
    },
    publishDate: {
      type: String,
      required: false,
    },
    imgUrl: {
      type: String,
      required: false,
    },

  }
};
</script>

<style scoped>
.card {
    padding: 32px 32px 54px;
	border: solid 1px #f2f2f2;
	background-color: #ffffff;
	width: 15rem;
}

</style>