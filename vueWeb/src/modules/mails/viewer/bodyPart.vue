<template>
  <iframe v-if="htmlBody.type === 'text/html'" :srcDoc=bodyValue.value scrolling="no" />
  <p v-else>{{ bodyValue.value }}</p>
</template>

<script>
  export default {
    name: 'MailsViewerBodyPart',
    props: {
      htmlBody: { type: Object, required: true },
      bodyValue: { type: Object, required: true },
    },
    // mounted() {
    //   console.log(this.htmlBody)
    // }
  }
</script>
