<script lang="ts">
  import Thumbnail from "./Thumbnail.svelte";
  import Mail from "./mails/model";
  import { Link } from "svelte-routing";
  export let mails: Array<Mail>
</script>

<div class="mails-list">
  {#each mails as mail}
      <Link to="/{mail.id}" class="mail">
        <Thumbnail mail={mail} />
      </Link>
  {/each}
</div>

<style lang="scss">
  .mails-list {
    width: 100%;
    height: 100%;
    overflow: auto;
    background: white;

    >.mail {
      display: block;
      background: none;
      width: 100%;
      text-align: left;
      margin: 0;
      padding: 0;
      border: none;
      outline: none;
      border-top: solid $light-grey 1px;
      cursor: pointer;

      &:first-child {
        border-top: none;
      }
    }
  }
</style>