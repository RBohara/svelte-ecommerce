<script>
  import CartButton from "../Cart/CartButton.svelte";
  import { Link } from "svelte-routing";
  import links from "../../constants/links";
  import LoginLink from "../LoginLink.svelte";
</script>

<nav class="navbar">
  <div class="nav-container">
    <div class="nav-center">
      <!-- nav links -->
      <ul class="nav-links">
        {#each links as link}
          <li>
            <Link to={link.url}>{link.text}</Link>
          </li>
        {/each}
      </ul>
      <!-- nav logo -->
      <Link class="nav-logo big-logo" to="/">
        <img src="/assets/images/logo.svg" class="logo" alt="logo" />
      </Link>
      <!-- cart toggle -->
      <div class="nav-aside">
        <LoginLink />
        <CartButton />
      </div>
    </div>
  </div>
</nav>
