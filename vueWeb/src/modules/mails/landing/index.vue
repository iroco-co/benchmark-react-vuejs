<template>
  <div class="mails-landing">
    <div class="list">
      <List :mails="mails" />
    </div>
    <div class="viewer" v-if="selectedMail">
      <Viewer :selectedMail=selectedMail />
    </div>
  </div>
</template>

<script>
  import List from '../list';
  import Viewer from '../viewer';
  import { fetchMails } from "@/modules/mails/api.js";

  export default {
    name: 'MailsLanding',
    components: {
      List,
      Viewer
    },
    data() {
      return {
        mails: [],
        selectedMail: null
      }
    },
    async mounted() {
      this.mails = await fetchMails();

      if (!this.mails.length) {
        await this.$router.push('/');
      } else if ('mail' in this.$route.params && this.$route.params.mail) {
        const currentMail = this.mails.find((mail) => mail.id === this.$route.params.mail);

        if (!currentMail) {
          await this.$router.push(`/${this.mails[0].id}`);
          this.selectedMail = this.mails[0];
        } else {
          this.selectedMail = currentMail;
        }
      } else {
        await this.$router.push(`/${this.mails[0].id}`);
        this.selectedMail = this.mails[0];
      }
    },
    watch: {
      async '$route' (to) {
        console.log("THERE")
        if (!this.mails.length) {
          await this.$router.push('/');
        } else if ('mail' in to.params && to.params.mail) {
          const currentMail = this.mails.find((mail) => mail.id === to.params.mail);

          if (!currentMail) {
            await this.$router.push(`/${this.mails[0].id}`);
            this.selectedMail = this.mails[0];
          } else {
            this.selectedMail = currentMail;
          }
        } else {
          await this.$router.push(`/${this.mails[0].id}`);
          this.selectedMail = this.mails[0];
        }
      }
    }
  }
</script>
