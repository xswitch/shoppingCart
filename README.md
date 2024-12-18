# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


TODO
-> finish layout for shop
-> create item cards
-> create search bar and categories components
-> create blank loading cards
-> Item not found page
-> Open cart and see items
 > Ability to remove or edit amount of items
 > See total price
 > Show sum of items if more than one of an item


Show total price & amount up top and a checkout button on bottom
fix: new items bubble pops up if item are added while cart is open
-> close cart if user clicks anywhere but inside the cart
 > Use the same handleClick as clicking the cart does when clicking outside


Bugs
cart sometimes doesn't open on click
Attach event listener on open and remove on close