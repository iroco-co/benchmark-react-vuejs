<script lang="ts">
  import type {BodyValue, HtmlBodyPart} from "./mails/model";

  export let htmlBody: HtmlBodyPart
  export let bodyValue: BodyValue
</script>

{#if htmlBody.type === 'text/html'}
  <iframe srcDoc={bodyValue.value} scrolling="no"></iframe>
{:else }
  <p class="textBody">{ bodyValue.value }</p>
{/if}

<style lang="scss">
  p.textBody {
    white-space: pre-wrap;
  }

  h1 {
    background: $light-grey;
    color: $text;
    margin: 0;
    padding-left: 20px;
    padding-bottom: 20px;
  }

  iframe {
    width: 100%;
    height: 2300px;
    border: none;
    outline: none;
  }
</style>