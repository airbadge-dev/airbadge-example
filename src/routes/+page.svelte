<script>
  export let data
</script>

<h1>AirBadge Example App</h1>

{#if data.session?.subscription && data.session?.subscription.status != 'canceled'}
  <a href="/billing/portal">Billing portal</a>
{:else}
  <a href="/pricing">Pricing</a>
{/if}

{#if data.session}

  <a href="/auth/signout">Signout</a>
{:else}
  <a href="/auth/signin">Signin</a>
{/if}

<pre>session = {JSON.stringify(data.session, null, 2)}</pre>
