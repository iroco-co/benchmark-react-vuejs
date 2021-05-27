<script lang="ts">
  import { formatRelativeTime } from "../helpers/time"
  import Mail from "./mails/model";
  export let mail: Mail

  function receivedAt(): String {
    return formatRelativeTime(mail.receivedAt)
  }
</script>

<div class="mails-thumbnail">
  <div class="infos">
    <p class="name">{ mail.from.name }</p>
    <p class="subject">{ mail.subject }</p>
  </div>
  <div class="metas">
    <p>{ receivedAt() }</p>
  </div>
</div>

<style lang="scss">
  .mails-thumbnail {
    padding: 10px 20px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    transition: background linear 100ms;

    >.infos {
      width: calc(100% - 100px);

      >p {
        color: $text;
        margin: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;

        &.name {
          font-weight: bold;
        }

        &.subject {
          margin-top: 5px;
        }
      }
    }

    >.metas {
      width: 100px;
      display: flex;
      justify-content: flex-end;

      >p {
        margin: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: $medium-grey;
      }
    }
  }
</style>