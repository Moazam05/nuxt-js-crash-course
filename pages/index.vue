<script setup>
const { data, error, pending } = useLazyFetch(
  "https://dummyjson.com/posts?limit=10"
);
</script>

<template>
  <div>
    <div v-if="error" class="text-2xl text-white">
      An error occured... {{ error }}
    </div>

    <div v-else-if="data">
      <div v-for="{ id, title, body } in data.posts" :key="id" class="my-8">
        <PostCard :id="id" :title="title" :body="body" />
      </div>
    </div>

    <div v-else class="text-2xl text-white">Loading...</div>
  </div>
</template>

<style scoped></style>
