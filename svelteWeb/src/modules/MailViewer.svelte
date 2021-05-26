<script lang="ts">
  import { formatRelativeTime } from "../helpers/time";
  import { fetchMail } from "./mails/api";
  import BodyPart from "./BodyPart.svelte";
  import {getCLS, getFCP, getFID, getLCP, getTTFB} from "web-vitals"
  import {afterUpdate, onMount} from "svelte";
  import Mail from "./mails/model";

  export let selectedMailId: String = null
  let mailId: String = null
  let mail: Mail = null

  function receivedAt(): String {
    return formatRelativeTime(mail.receivedAt)
  }

  function sendToAnalytics (metric) {
    const body = JSON.stringify({[metric.name]: metric.value})
    fetch('/analytics', {body, method: 'POST', headers: {'Content-Type': 'application/json'}, keepalive: true})
  }

  async function updateMailId(id) {
    mailId = id
    mail = await fetchMail(mailId)
  }

  $: updateMailId(selectedMailId)

  onMount(async () => {
    mail = await fetchMail(selectedMailId)
  })

  afterUpdate(() => {
    getCLS(sendToAnalytics)
    getFCP(sendToAnalytics)
    getFID(sendToAnalytics)
    getLCP(sendToAnalytics)
    getTTFB(sendToAnalytics)
  })
</script>

{#if mail !== null}
  <div class="mails-viewer">
    <div class="header">
      <div class="infos">
        <p class="name">{ mail.from.name }</p>
        <p class="mail">{ mail.from.email }</p>
      </div>
      <div class="metas">
        <p class="receivedAt">{ receivedAt() }</p>
      </div>
    </div>
    <div class="body">
      <h1>{ mail.subject }</h1>

      {#if mail.htmlBody}
        {#each mail.htmlBody as htmlBody}
          <div id={htmlBody.partId}>
            <BodyPart htmlBody={htmlBody} bodyValue={mail.bodyValues[htmlBody.partId]} />
          </div>
        {/each}
      {/if}
    </div>
  </div>
{/if}

<style lang="scss">
  .mails-viewer {
    width: 100%;
    height: 100%;
    background: white;

    >.header {
      width: 100%;
      height: 100px;
      padding: 0 20px;
      background: $light-grey;
      display: flex;
      align-items: center;
      justify-content: space-between;

      >.infos, >.metas {
        >p {
          color: $text;
          margin: 0;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;

          &.name {
            font-weight: bold;
          }

          &.mail {
            margin-top: 5px;
            color: $medium-grey
          }

          &.receivedAt {
            color: $medium-grey;
          }
        }
      }
    }

    >.body {
      width: 100%;
      height: calc(100% - 100px);
      overflow: auto;
    }
  }
</style>