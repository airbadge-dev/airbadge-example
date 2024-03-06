<script>
  export let data
</script>

<h1>Pricing</h1>

{#each data.plans as plan}
  <section>
    <h2>{plan.name}</h2>
    <p>
      Price: {(plan.price / 100).toLocaleString('en-US', { style: 'currency', currency: 'usd' })}
    </p>
    <a href="/billing/checkout?plan={plan.id}">Sign up</a>
  </section>
{/each}

<h2>Debug</h2>

<pre>plans = {JSON.stringify(data.plans, null, 2)}</pre>
