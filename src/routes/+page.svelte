<script>
  export let data
</script>

<h1>AirBadge Example App</h1>

{#if data.session}
  {#if data.session.subscription}
    <a href="/billing/portal">Billing portal</a>
  {/if}

  <a href="/auth/signout">Signout</a>
{:else}
  <a href="/pricing">Pricing</a>
  <a href="/auth/signin">Signin</a>
{/if}

<pre>session = {JSON.stringify(data.session, null, 2)}</pre>
