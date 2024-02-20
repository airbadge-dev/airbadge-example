<script>
  export let data
</script>

<h1>AirBadge Example App</h1>

<a href="/pricing">Pricing</a>

<pre>session = {JSON.stringify(data.session, null, 2)}</pre>

{#if data.session}
  <a href="/billing/portal">Billing portal</a>
{/if}
