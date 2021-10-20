<script>
  import user from "../stores/user";
  import { Link } from "svelte-routing";
  // logout func
  import globalStore from "../stores/globalStore";
</script>

{#if $user.jwt}
  <Link
    to="/"
    class="logout-btn"
    on:click={() => globalStore.toggleItem("sidebar", false)}>logout</Link
  >
{:else}
  <Link to="/login" on:click={() => globalStore.toggleItem("sidebar", false)}
    >login</Link
  >
{/if}
