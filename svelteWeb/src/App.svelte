<script lang="ts">
  import { Router, Link, Route } from "svelte-routing"
  import Mails from "./modules/mails/landing"
  export let url = ""
</script>

<Router url="{url}">
  <div>
    <Route path="/"><Mails /></Route>
    <Route path="/:mail" component="{Mails}" />
  </div>
</Router>
