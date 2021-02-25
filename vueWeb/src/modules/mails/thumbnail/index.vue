<template>
  <div class="mails-thumbnail">
    <div class="infos">
      <p class="name">{{ mail.from.name }}</p>
      <p class="subject">{{ mail.subject }}</p>
    </div>
    <div class="metas">
      <p>{{ receivedAt }}</p>
    </div>
  </div>
</template>

<script>
  import { formatRelativeTime } from "@/helpers/time";

  export default {
    name: 'MailsThumbnail',
    props: {
      mail: { type: Object, required: true },
    },
    computed: {
      receivedAt: function () {
        return formatRelativeTime(this.mail.receivedAt);
      }
    }
  }
</script>
