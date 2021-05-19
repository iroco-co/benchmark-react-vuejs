<script lang="ts">
  import {BodyValue, HtmlBodyPart} from "./mails/model";

  export let htmlBody: HtmlBodyPart
  export let bodyValue: BodyValue
</script>

{#if htmlBody.type === 'text/html'}
  <iframe srcDoc={bodyValue.value} scrolling="no"></iframe>
{:else }
  <p class="textBody">{ bodyValue.value }</p>
{/if}