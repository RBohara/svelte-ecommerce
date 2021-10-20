import { writable, derived } from "svelte/store";
import localProducts from "../localProducts";

const store = writable([flattenProducts([...localProducts])]);

// subscribe
// set
// update

// flatten products
function flattenProducts(data) {
  return data.map((item) => {
    let image = item.image.url;
    return { ...item, image };
  });
}

// // featured store
// export const featuredStore = derived(store, ($featured[0]) => {
//   return $featured[0].filter((item) => item.featured === true);
// });

export default store;
