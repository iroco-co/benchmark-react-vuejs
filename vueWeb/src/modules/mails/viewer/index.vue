<template>
  <div class="mails-viewer" v-if="mail !== null">
    <div class="header">
      <div class="infos">
        <p class="name">{{ mail.from.name }}</p>
        <p class="mail">{{ mail.from.email }}</p>
      </div>
      <div class="metas">
        <p class="receivedAt">{{ receivedAt }}</p>
      </div>
    </div>
    <div class="body">
      <h1>{{ mail.subject }}</h1>

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
      selectedMailId: { type: String, required: true }
    },
    data() {
      return {
        mail: null
      }
    },
    computed: {
      receivedAt: function () {
        return formatRelativeTime(this.mail.receivedAt)
      }
    },
    async mounted() {
      await this.loadMail()
    },
    methods: {
      async loadMail () {
        this.mail = await fetchMail(this.selectedMailId)
      }
    },
    watch: {
      selectedMailId: function () {
        this.loadMail()
      }
    }
  }
</script>
