# 1Fi Marketplace Assignment

## Live Demo

🚀 **Live Project:** https://onef1-marketplace.onrender.com

## Architecture

Every UI component owns its JSX and CSS. No Tailwind CSS is used.

- `components/Navbar` — desktop top navigation
- `components/Hero` — Shop hero/banner
- `components/ShopTabs` — Top Brands / Nearby Stores / 1Fi Marketplace
- `components/SearchBar`
- `components/CategoryChips`
- `components/ProductCard`
- `components/BottomNav` — mobile navigation matching the screenshot
- `components/LoadingState` / `ErrorState`
- `pages/Marketplace`
- `pages/ProductDetails`
- `pages/BlankShop`

## Responsive Behavior

Desktop uses a centered wide layout and top navbar.

Mobile switches to the screenshot-style floating bottom navigation, compact cards, three-tab pill, hero and single/two-column mobile layout.

## Run

```bash
npm install
npm run dev
