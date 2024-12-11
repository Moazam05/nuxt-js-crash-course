<script setup>
definePageMeta({
  layout: "custom",
});

const route = useRoute();

const {
  data: post,
  error,
  pending,
} = useLazyFetch(`https://dummyjson.com/posts/${route.params.id}`);

useHead({
  title: "Post Detail",
});
</script>

<template>
  <div>
    <div v-if="error" class="text-2xl text-white">
      An error occured... {{ error }}
    </div>
    <div v-else-if="post">
      <PostDetail :id="post.id" :title="post.title" :body="post.body" />
    </div>
    <div v-else class="text-2xl text-white">Loading...</div>
  </div>
</template>

<style lang="css" scoped></style>
