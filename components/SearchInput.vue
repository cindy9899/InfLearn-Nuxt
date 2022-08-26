<template>
  <div>
    <!-- <input type="text" :value="searchKeyword" @input="$emit('input', $event.target.value)" /> -->
    <input type="text" :value="value" @input="$emit('input', $event.target.value)" />
    <button @click="$emit('search')">search</button>
  </div>
</template>

<script>
  // export default {
  //   props: {
  //     searchKeyword: {
  //       type: String,
  //       default: ()=>'',
  //     },
  //   },
  // }
  export default {
    props: {
      value: {
        type: String,
        default: ()=>'',
      },
    },
  }
</script>
