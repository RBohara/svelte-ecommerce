<script>
  import globalStore from "../../stores/globalStore";
  import { fly, fade, blur } from "svelte/transition";
  import { Link } from "svelte-routing";
  import ItemsList from "./ItemsList.svelte";
  import user from "../../stores/user";
</script>

<div class="cart-overlay" transition:blur>
  <div class="cart-container" transition:fly={{ x: 100 }}>
    <div class="cart" transition:fade={{ delay: 400 }}>
      <!-- cart header -->
      <div class="cart-header">
        <button
          class="btn-close"
          on:click={() => {
            globalStore.toggleItem("cart", false);
          }}
        >
          <i class="fas fa-window-close" />
        </button>
        <h2 class="cart-title">your bag</h2>
        <span />
      </div>
      <!-- end of cart header -->

      <!-- cart items -->
      <ItemsList />
      <!-- end of cart items -->

      <!-- cart footer -->
      <div class="cart-footer">
        {#if !$user.jwt}
          <p class="cart-login">
            in order to checkout please
            <Link
              to="/login"
              on:click={() => {
                globalStore.toggleItem("cart", false);
              }}>login</Link
            >
          </p>
        {:else}
          <Link
            to="/checkout"
            class="btn btn-primary btn-block"
            on:click={() => {
              globalStore.toggleItem("cart", false);
            }}
          >
            checkout
          </Link>
        {/if}
      </div>
      <!-- end of cart footer -->
    </div>
  </div>
</div>
