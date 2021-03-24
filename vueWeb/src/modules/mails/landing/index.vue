<template>
  <div class="mails-landing">
    <div class="list">
      <MailsList :mails="mails" v-on:mail-selected="selectedMailId = $event" />
    </div>
    <div class="viewer" v-if="selectedMailId">
      <Viewer :selectedMailId=selectedMailId />
    </div>
  </div>
</template>

<script>
  import Viewer from '../viewer';
  import { fetchMails } from "@/modules/mails/api.js";
  import MailsList from "@/modules/mails/mails_list";

  export default {
    name: 'MailsLanding',
    components: {
      MailsList,
      Viewer
    },
    data() {
      return {
        mails: [],
        selectedMailId: null
      }
    },
    async mounted() {
      this.mails = await fetchMails();
      if (this.mails.length) {
        this.selectedMailId = this.mails[0].id
        await this.$router.push(`/${this.selectedMailId}`)
      }
    }
  }
</script>
