<template>
  <div class="mails-list">
    <router-link v-for="mail in mails" :key="mail.id" :to=mail.id class="mail" v-on:click.native="$emit('mail-selected', mail.id)">
      <Thumbnail :mail=mail />
    </router-link>
  </div>
</template>

<script>
  import Thumbnail from "@/modules/mails/thumbnail";

  export default {
    name: 'MailsList',
    components: { Thumbnail },
    props: {
      mails: Array,
    }
  }
</script>
