<template>
  <div class="mails-viewer">
    <div class="header">
      <div class="infos">
        <p class="name">{{ selectedMail.from.name }}</p>
        <p class="mail">{{ selectedMail.from.email }}</p>
      </div>
      <div class="metas">
        <p class="receivedAt">{{ receivedAt }}</p>
      </div>
    </div>
    <div class="body">
      <h1>{{ selectedMail.subject }}</h1>

      <template v-if="mail.htmlBody">
        <div v-for="htmlBody in mail.htmlBody" :key=htmlBody.partId>
          <BodyPart :htmlBody=htmlBody :bodyValue=mail.bodyValues[htmlBody.partId] />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import { formatRelativeTime } from "@/helpers/time";
  import { fetchMail } from "@/modules/mails/api";
  import BodyPart from "./bodyPart";

  export default {
    name: 'MailsViewer',
    components: {
      BodyPart
    },
    props: {
      selectedMail: { type: Object, required: true }
    },
    data() {
      return {
        mail: this.selectedMail
      }
    },
    computed: {
      receivedAt: function () {
        return formatRelativeTime(this.selectedMail.receivedAt);
      }
    },
    async mounted() {
      this.mail = await fetchMail(this.selectedMail.id);
    }
  }
</script>
