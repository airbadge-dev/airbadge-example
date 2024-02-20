export async function load({ fetch }) {
  const response = await fetch('/billing/plans')

  return {
    plans: await response.json()
  }
}
