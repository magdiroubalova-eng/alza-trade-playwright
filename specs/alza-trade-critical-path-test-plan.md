# Alza Trade supplier portal critical path plan

## Application Overview

Test plan for the Alza Trade supplier portal critical path starting from the demo-account dashboard, with focus on main navigation, product listing/filtering, and order listing/filtering.

## Test Scenarios

### 1. Supplier portal navigation and critical flows

**Seed:** `seed.spec.ts`

#### 1.1. Map main navigation from the dashboard

**File:** `specs/alza-trade-critical-path-test-plan.md`

**Steps:**
  1. Open the Alza Trade portal from the seed and land on the dashboard as the demo supplier user.
    - expect: The dashboard is loaded and the main navigation area is visible.
  2. Inspect the left navigation/menu and verify the presence of the requested items: Přehled, Objednávky, Stav produktů, Produkty v dost. feedu, Chyby v dostupnostním feedu, Listing a úpravy produktů, Podpora, Doklady, Nastavení, Alza financing, Napište nám, Přejít na Alza.cz, and Návody.
    - expect: Each requested top-level navigation item is present in the menu or secondary navigation.
  3. Prefer data-tid attributes for navigation items and controls where available; if a data-tid is absent, use role-based locators such as link or menuitem by visible label.
    - expect: Navigation elements can be located reliably without brittle XPath.

#### 1.2. View and filter products with a valid filter

**File:** `specs/alza-trade-critical-path-test-plan.md`

**Steps:**
  1. From the dashboard, open the product-management entry point (prefer 'Listing a úpravy produktů' if present; otherwise use the closest product-listing menu item).
    - expect: The product listing page is displayed with a table or grid of products.
  2. Locate the product search/filter controls and apply a valid filter such as a known product name, SKU, category, or active status.
    - expect: The product table updates to show only matching products.
  3. Verify that the visible product rows correspond to the applied filter and that the filter state remains visible to the user.
    - expect: The results are narrowed to a non-empty set and no unrelated products are shown.
  4. Reset or clear the filter and confirm the full product list returns.
    - expect: The full product list is restored after clearing the filter.

#### 1.3. View and filter products with an empty-result case

**File:** `specs/alza-trade-critical-path-test-plan.md`

**Steps:**
  1. Open the same product listing view and apply a filter that should return no matches, for example an unknown SKU, a non-existing product name, or an impossible combination of filters.
    - expect: The page shows an empty state or a no-results message.
  2. Verify that the empty-state message is visible and that no product rows are rendered.
    - expect: The UI clearly communicates that no products match the selected filter.
  3. Clear the filter and confirm that the list becomes available again.
    - expect: The empty state disappears and the product listing is restored.

#### 1.4. View and filter orders with a valid filter

**File:** `specs/alza-trade-critical-path-test-plan.md`

**Steps:**
  1. From the dashboard, navigate to Objednávky.
    - expect: The orders page is displayed with a list or table of orders.
  2. Locate the orders search/filter controls and apply a valid filter such as a known order number, status, date range, or supplier reference.
    - expect: The orders list updates to a non-empty subset that matches the filter.
  3. Verify the visible orders correspond to the filter and that the applied filter state is reflected in the UI.
    - expect: Only matching orders remain visible.
  4. Reset the filter and confirm the full orders list returns.
    - expect: The full orders list is restored after clearing the filter.

#### 1.5. View and filter orders with an empty-result case

**File:** `specs/alza-trade-critical-path-test-plan.md`

**Steps:**
  1. Open Objednávky again and apply a filter that should return no matches, such as a non-existing order number or an impossible status/date combination.
    - expect: The UI shows an empty-state or no-results message for orders.
  2. Verify that no order rows are rendered and that the empty-state is clearly communicated.
    - expect: The user sees a clear empty result state instead of a stale or misleading list.
  3. Clear the filter and confirm that the original orders list becomes available again.
    - expect: The orders page returns to its normal populated state.
