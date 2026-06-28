# Alza Trade Playwright tests

This repository contains Playwright tests for the Alza Trade supplier portal.

## Configurable demo banner timeout

Some tests (the demo sign-in flow) wait for a demo banner to appear on the landing page before continuing. If the portal is slow or your environment needs a longer wait, set the `DEMO_BANNER_TIMEOUT` environment variable (milliseconds).

- Default: `5000` (5 seconds)
- Example (Windows PowerShell):

```powershell
$env:DEMO_BANNER_TIMEOUT = '10000'
npx playwright test tests/orders-filter-valid.spec.ts
```

- Example (macOS / Linux):

```bash
export DEMO_BANNER_TIMEOUT=10000
npx playwright test tests/orders-filter-valid.spec.ts
```

## Run the single spec

Run only the orders filter spec:

```bash
npx playwright test tests/orders-filter-valid.spec.ts
```

Or run all tests:

```bash
npx playwright test
```

## Notes

- If the demo banner does not appear, the test will fail with a clear error explaining how to increase the timeout.
- The timeout variable must be a positive integer (milliseconds).
