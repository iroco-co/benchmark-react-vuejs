<script lang="ts">
  import Thumbnail from "./Thumbnail.svelte";
  import type Mail from "./mails/model";
  export let mails: Array<Mail>;
  export let selectedMailId = null; 

  function clickEvent(e: CustomEvent) {
   selectedMailId = e.detail
  }

</script>

<div class="mails-list">
  {#each mails as mail}
    <Thumbnail mail={mail} bind:currentId={selectedMailId} on:clickOnMail={clickEvent} />
  {/each}
</div>

<style lang="scss">
  .mails-list {
    width: 100%;
    height: 100%;
    overflow: auto;
    background: white;
  }
</style>

 


