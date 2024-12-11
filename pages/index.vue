<script setup>
const { data, error, pending } = useLazyFetch(
  "https://dummyjson.com/posts?limit=10"
);
</script>

<template>
  <div v-for="{ id, title, body } in data.posts" :key="id" class="my-8">
    <PostCard :id="id" :title="title" :body="body" />
  </div>
</template>

<style scoped></style>
