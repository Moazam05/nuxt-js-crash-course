<script setup>
import { truncateDescription } from "../../utils/index.js";

// Mock post data
const post = {
  id: 1,
  title: "Post Title",
  body: "This is a longer post body that demonstrates the truncation functionality.",
};
</script>

<template>
  <div
    class="bg-gray-600 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row mx-auto py-4 max-w-5xl mt-3"
  >
    <!-- Post Image -->
    <div class="w-full md:w-1/3 p-4">
      <img
        src="/images/banner.jpg"
        alt="Post Image"
        class="w-full h-auto object-cover"
      />
    </div>

    <!-- Post Content -->
    <div class="w-full md:w-2/3 px-6 py-4">
      <h2 class="text-2xl font-bold mb-2 text-white">{{ post?.title }}</h2>
      <p class="text-white text-base mb-4">
        {{ truncateDescription(post?.body, 5) }}
      </p>
      <NuxtLink
        :to="`/posts/${post?.id}`"
        class="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
      >
        Read More
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
