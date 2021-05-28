<script lang="ts">
  import { formatRelativeTime } from "../helpers/time";
  import type Mail from "./mails/model";
  import { navigate } from "svelte-routing";
  import { createEventDispatcher } from "svelte";

  export let mail: Mail;
  export let currentId: String = null
  let active = false;

  const dispatch = createEventDispatcher();
  function clickOnMail() {
    dispatch("clickOnMail", mail.id );
    navigate(`/${mail.id}`);
  }

  $: active = currentId === mail.id

  function receivedAt(): String {
    return formatRelativeTime(mail.receivedAt);
  }
</script>

<div  class="mail"  class:link-active={active} on:click={() => clickOnMail()}>
  <div class="mails-thumbnail">
    <div class="infos">
      <p class="name">{mail.from.name}</p>
      <p class="subject">{mail.subject}</p>
    </div>
    <div class="metas">
      <p>{receivedAt()}</p>
    </div>
  </div>
</div>

<style lang="scss">
  .mail {
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

    &.link-active {
      background: #434343;
      >.mails-thumbnail {
        >.infos {
          > p {
            color: white;
          }
        }
      }
    }

    > .mails-thumbnail {
      padding: 10px 20px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      transition: background linear 100ms;

      > .infos {
        width: calc(100% - 100px);

        > p {
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

      > .metas {
        width: 100px;
        display: flex;
        justify-content: flex-end;

        > p {
          margin: 0;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          color: $medium-grey;
        }
      }
    }
  }
</style>


