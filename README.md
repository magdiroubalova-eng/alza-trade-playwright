# Alza Trade Portal - E2E Test Automation

End-to-end tests for the Alza Trade supplier portal (demo environment),
built with Playwright and TypeScript using the Playwright Agents workflow
(planner, generator, healer).

## What the suite verifies

**Demo access (`tests/seed.spec.ts`)**
Enters the public demo account from the landing page and confirms the
session lands on the dashboard.

**Orders - filter by ID (`tests/orders-filter-valid.spec.ts`)**
1. Enters the demo account.
2. Navigates to Objednávky (Orders).
3. Filters the orders list by a valid order ID.
4. Asserts the result count is exactly one record.
5. Asserts the matching order ID is visible in the results panel.

## Project structure

- `tests/fixtures.ts` - shared fixture that performs the demo login once and
  provides an authenticated page to each test (keeps tests DRY).
- `tests/` - test specs.
- `specs/` - Markdown test plan produced by the planner agent.
- `.github/agents/` - Playwright agent definitions (planner, generator, healer).

## Tech and approach

- Playwright + TypeScript, Chromium project.
- Locator strategy: prefers `data-tid` test attributes, falls back to
  role/text locators.
- Assertions are scoped to specific page regions to avoid strict-mode
  ambiguity. For example, the order-ID check targets the results panel so it
  does not also match the filter chip in the search box.
- Built with the Playwright Agents workflow; generated tests were reviewed
  and corrected by hand before committing.

## Run locally

```bash
npm install
npx playwright install chromium
npx playwright test
npx playwright show-report
```