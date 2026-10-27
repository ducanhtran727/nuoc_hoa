// Dán URL Web App Google Apps Script (đuôi /exec) vào đây.
const URLscript =
  "https://script.google.com/macros/s/AKfycbz93Qui7gLMjYwA6vEFj0GH7iUwys_WoKrK7Lrqkjl2qI1Eq0N87dJ9_bWe9rZoi_IM/exec";
let isSubmitting = false;

const products = [
  {
    "id": 100,
    "brand": "Yves Saint Laurent",
    "name": "Y EDP",
    "gender": "male",
    "price": 2900000,
    "comboPrice": 5800000,
    "volume": "Chai 100ml",
    "saleType": "full",
    "image": "assets/catalog-20261027/ysl-y-1.webp",
    "images": [
      "assets/catalog-20261027/ysl-y-1.webp",
      "assets/catalog-20261027/ysl-y-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 101,
    "brand": "Yves Saint Laurent",
    "name": "Y EDP",
    "gender": "male",
    "price": 280000,
    "comboPrice": 500000,
    "volume": "Chiết 10ml",
    "saleType": "decant",
    "image": "assets/catalog-20261027/ysl-y-1.webp",
    "images": [
      "assets/catalog-20261027/ysl-y-1.webp",
      "assets/catalog-20261027/ysl-y-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 102,
    "brand": "Yves Saint Laurent",
    "name": "MYSLF EDP",
    "gender": "male",
    "price": 2500000,
    "comboPrice": 5000000,
    "volume": "Chai 100ml",
    "saleType": "full",
    "image": "assets/catalog-20261027/ysl-myslf-1.webp",
    "images": [
      "assets/catalog-20261027/ysl-myslf-1.webp",
      "assets/catalog-20261027/ysl-myslf-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 103,
    "brand": "Yves Saint Laurent",
    "name": "MYSLF EDP",
    "gender": "male",
    "price": 229000,
    "comboPrice": 440000,
    "volume": "Chiết 10ml",
    "saleType": "decant",
    "image": "assets/catalog-20261027/ysl-myslf-1.webp",
    "images": [
      "assets/catalog-20261027/ysl-myslf-1.webp",
      "assets/catalog-20261027/ysl-myslf-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 104,
    "brand": "Xerjoff",
    "name": "1861 Naxos EDP",
    "gender": "unisex",
    "price": 4500000,
    "comboPrice": 9000000,
    "volume": "Chai 100ml",
    "saleType": "full",
    "image": "assets/catalog-20261027/xerjoff-naxos-1.webp",
    "images": [
      "assets/catalog-20261027/xerjoff-naxos-1.webp",
      "assets/catalog-20261027/xerjoff-naxos-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 105,
    "brand": "Xerjoff",
    "name": "1861 Naxos EDP",
    "gender": "unisex",
    "price": 390000,
    "comboPrice": 700000,
    "volume": "Chiết 10ml",
    "saleType": "decant",
    "image": "assets/catalog-20261027/xerjoff-naxos-1.webp",
    "images": [
      "assets/catalog-20261027/xerjoff-naxos-1.webp",
      "assets/catalog-20261027/xerjoff-naxos-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 106,
    "brand": "Tom Ford",
    "name": "Ombré Leather EDP",
    "gender": "unisex",
    "price": 3200000,
    "comboPrice": 6400000,
    "volume": "Chai 100ml",
    "saleType": "full",
    "image": "assets/catalog-20261027/tom-ford-ombre-leather-1.webp",
    "images": [
      "assets/catalog-20261027/tom-ford-ombre-leather-1.webp",
      "assets/catalog-20261027/tom-ford-ombre-leather-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 107,
    "brand": "Tom Ford",
    "name": "Ombré Leather EDP",
    "gender": "unisex",
    "price": 299000,
    "comboPrice": 598000,
    "volume": "Chiết 10ml",
    "saleType": "decant",
    "image": "assets/catalog-20261027/tom-ford-ombre-leather-1.webp",
    "images": [
      "assets/catalog-20261027/tom-ford-ombre-leather-1.webp",
      "assets/catalog-20261027/tom-ford-ombre-leather-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 108,
    "brand": "Parfums de Marly",
    "name": "Delina Exclusif Parfum",
    "gender": "female",
    "price": 6000000,
    "comboPrice": 12000000,
    "volume": "Chai 75ml",
    "saleType": "full",
    "image": "assets/catalog-20261027/delina-exclusif-1.webp",
    "images": [
      "assets/catalog-20261027/delina-exclusif-1.webp",
      "assets/catalog-20261027/delina-exclusif-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 109,
    "brand": "Parfums de Marly",
    "name": "Delina Exclusif Parfum",
    "gender": "female",
    "price": 500000,
    "comboPrice": 1000000,
    "volume": "Chiết 10ml",
    "saleType": "decant",
    "image": "assets/catalog-20261027/delina-exclusif-1.webp",
    "images": [
      "assets/catalog-20261027/delina-exclusif-1.webp",
      "assets/catalog-20261027/delina-exclusif-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 110,
    "brand": "Le Labo",
    "name": "Another 13 EDP",
    "gender": "unisex",
    "price": 6500000,
    "comboPrice": 13000000,
    "volume": "Chai 100ml",
    "saleType": "full",
    "image": "assets/catalog-20261027/another-13-1.webp",
    "images": [
      "assets/catalog-20261027/another-13-1.webp",
      "assets/catalog-20261027/another-13-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 111,
    "brand": "Le Labo",
    "name": "Another 13 EDP",
    "gender": "unisex",
    "price": 550000,
    "comboPrice": 1000000,
    "volume": "Chiết 10ml",
    "saleType": "decant",
    "image": "assets/catalog-20261027/another-13-1.webp",
    "images": [
      "assets/catalog-20261027/another-13-1.webp",
      "assets/catalog-20261027/another-13-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 112,
    "brand": "Jean Paul Gaultier",
    "name": "Le Male Le Parfum EDP Intense",
    "gender": "male",
    "price": 2500000,
    "comboPrice": 5000000,
    "volume": "Chai 75ml",
    "saleType": "full",
    "image": "assets/catalog-20261027/le-male-le-parfum-1.webp",
    "images": [
      "assets/catalog-20261027/le-male-le-parfum-1.webp",
      "assets/catalog-20261027/le-male-le-parfum-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 113,
    "brand": "Jean Paul Gaultier",
    "name": "Le Male Le Parfum EDP Intense",
    "gender": "male",
    "price": 269000,
    "comboPrice": 500000,
    "volume": "Chiết 10ml",
    "saleType": "decant",
    "image": "assets/catalog-20261027/le-male-le-parfum-1.webp",
    "images": [
      "assets/catalog-20261027/le-male-le-parfum-1.webp",
      "assets/catalog-20261027/le-male-le-parfum-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 114,
    "brand": "Gucci",
    "name": "Bloom EDP",
    "gender": "female",
    "price": 2200000,
    "comboPrice": 4400000,
    "volume": "Chai 100ml",
    "saleType": "full",
    "image": "assets/catalog-20261027/gucci-bloom-1.webp",
    "images": [
      "assets/catalog-20261027/gucci-bloom-1.webp",
      "assets/catalog-20261027/gucci-bloom-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 115,
    "brand": "Gucci",
    "name": "Bloom EDP",
    "gender": "female",
    "price": 250000,
    "comboPrice": 450000,
    "volume": "Chiết 10ml",
    "saleType": "decant",
    "image": "assets/catalog-20261027/gucci-bloom-1.webp",
    "images": [
      "assets/catalog-20261027/gucci-bloom-1.webp",
      "assets/catalog-20261027/gucci-bloom-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 116,
    "brand": "Dior",
    "name": "Sauvage EDP",
    "gender": "male",
    "price": 2900000,
    "comboPrice": 5800000,
    "volume": "Chai 100ml",
    "saleType": "full",
    "image": "assets/catalog-20261027/dior-sauvage-1.webp",
    "images": [
      "assets/catalog-20261027/dior-sauvage-1.webp",
      "assets/catalog-20261027/dior-sauvage-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 117,
    "brand": "Dior",
    "name": "Sauvage EDP",
    "gender": "male",
    "price": 270000,
    "comboPrice": 500000,
    "volume": "Chiết 10ml",
    "saleType": "decant",
    "image": "assets/catalog-20261027/dior-sauvage-1.webp",
    "images": [
      "assets/catalog-20261027/dior-sauvage-1.webp",
      "assets/catalog-20261027/dior-sauvage-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 118,
    "brand": "Dior",
    "name": "Homme Intense EDP",
    "gender": "male",
    "price": 2900000,
    "comboPrice": 5800000,
    "volume": "Chai 100ml",
    "saleType": "full",
    "image": "assets/catalog-20261027/dior-homme-intense-1.webp",
    "images": [
      "assets/catalog-20261027/dior-homme-intense-1.webp",
      "assets/catalog-20261027/dior-homme-intense-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 119,
    "brand": "Dior",
    "name": "Homme Intense EDP",
    "gender": "male",
    "price": 279000,
    "comboPrice": 550000,
    "volume": "Chiết 10ml",
    "saleType": "decant",
    "image": "assets/catalog-20261027/dior-homme-intense-1.webp",
    "images": [
      "assets/catalog-20261027/dior-homme-intense-1.webp",
      "assets/catalog-20261027/dior-homme-intense-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 120,
    "brand": "Chanel",
    "name": "N°5 L’Eau EDT",
    "gender": "female",
    "price": 3500000,
    "comboPrice": 7000000,
    "volume": "Chai 100ml",
    "saleType": "full",
    "image": "assets/catalog-20261027/chanel-no5-leau-1.webp",
    "images": [
      "assets/catalog-20261027/chanel-no5-leau-1.webp",
      "assets/catalog-20261027/chanel-no5-leau-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 121,
    "brand": "Chanel",
    "name": "N°5 L’Eau EDT",
    "gender": "female",
    "price": 359000,
    "comboPrice": 650000,
    "volume": "Chiết 10ml",
    "saleType": "decant",
    "image": "assets/catalog-20261027/chanel-no5-leau-1.webp",
    "images": [
      "assets/catalog-20261027/chanel-no5-leau-1.webp",
      "assets/catalog-20261027/chanel-no5-leau-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 122,
    "brand": "Chanel",
    "name": "Coco Mademoiselle L’Eau Privée",
    "gender": "female",
    "price": 4500000,
    "comboPrice": 9000000,
    "volume": "Chai 100ml",
    "saleType": "full",
    "image": "assets/catalog-20261027/coco-leau-privee-1.webp",
    "images": [
      "assets/catalog-20261027/coco-leau-privee-1.webp",
      "assets/catalog-20261027/coco-leau-privee-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 123,
    "brand": "Chanel",
    "name": "Coco Mademoiselle L’Eau Privée",
    "gender": "female",
    "price": 350000,
    "comboPrice": 650000,
    "volume": "Chiết 10ml",
    "saleType": "decant",
    "image": "assets/catalog-20261027/coco-leau-privee-1.webp",
    "images": [
      "assets/catalog-20261027/coco-leau-privee-1.webp",
      "assets/catalog-20261027/coco-leau-privee-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 124,
    "brand": "Chanel",
    "name": "Bleu de Chanel EDP",
    "gender": "male",
    "price": 4300000,
    "comboPrice": 8600000,
    "volume": "Chai 100ml",
    "saleType": "full",
    "image": "assets/catalog-20261027/bleu-de-chanel-1.webp",
    "images": [
      "assets/catalog-20261027/bleu-de-chanel-1.webp",
      "assets/catalog-20261027/bleu-de-chanel-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 125,
    "brand": "Chanel",
    "name": "Bleu de Chanel EDP",
    "gender": "male",
    "price": 380000,
    "comboPrice": 700000,
    "volume": "Chiết 10ml",
    "saleType": "decant",
    "image": "assets/catalog-20261027/bleu-de-chanel-1.webp",
    "images": [
      "assets/catalog-20261027/bleu-de-chanel-1.webp",
      "assets/catalog-20261027/bleu-de-chanel-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 126,
    "brand": "Dior",
    "name": "Miss Dior Blooming Bouquet EDT",
    "gender": "female",
    "price": 2900000,
    "comboPrice": 5800000,
    "volume": "Chai 100ml",
    "saleType": "full",
    "image": "assets/catalog-20261027/miss-dior-blooming-bouquet-1.webp",
    "images": [
      "assets/catalog-20261027/miss-dior-blooming-bouquet-1.webp",
      "assets/catalog-20261027/miss-dior-blooming-bouquet-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 127,
    "brand": "Dior",
    "name": "Miss Dior Blooming Bouquet EDT",
    "gender": "female",
    "price": 220000,
    "comboPrice": 400000,
    "volume": "Chiết 10ml",
    "saleType": "decant",
    "image": "assets/catalog-20261027/miss-dior-blooming-bouquet-1.webp",
    "images": [
      "assets/catalog-20261027/miss-dior-blooming-bouquet-1.webp",
      "assets/catalog-20261027/miss-dior-blooming-bouquet-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 128,
    "brand": "Gucci",
    "name": "Flora Gorgeous Gardenia EDP",
    "gender": "female",
    "price": 2900000,
    "comboPrice": 5800000,
    "volume": "Chai 100ml",
    "saleType": "full",
    "image": "assets/catalog-20261027/gucci-flora-gardenia-1.webp",
    "images": [
      "assets/catalog-20261027/gucci-flora-gardenia-1.webp",
      "assets/catalog-20261027/gucci-flora-gardenia-2.webp"
    ],
    "inStock": true
  },
  {
    "id": 129,
    "brand": "Gucci",
    "name": "Flora Gorgeous Gardenia EDP",
    "gender": "female",
    "price": 250000,
    "comboPrice": 480000,
    "volume": "Chiết 10ml",
    "saleType": "decant",
    "image": "assets/catalog-20261027/gucci-flora-gardenia-1.webp",
    "images": [
      "assets/catalog-20261027/gucci-flora-gardenia-1.webp",
      "assets/catalog-20261027/gucci-flora-gardenia-2.webp"
    ],
    "inStock": true
  }
];
const money = (n) => n.toLocaleString("vi-VN") + "₫";
const $ = (s) => document.querySelector(s);
const gender = { female: "Nữ", male: "Nam", unisex: "Unisex" };
let filter = "all",
  limit = 8,
  selectedProduct = null;

function render() {
  let list = products.filter(
    (p) =>
      (filter === "all" || p.gender === filter) &&
      (p.brand + " " + p.name)
        .toLocaleLowerCase("vi")
        .includes($("#search").value.trim().toLocaleLowerCase("vi")),
  );
  if ($("#sort").value !== "default")
    list.sort((a, b) =>
      $("#sort").value === "asc" ? a.price - b.price : b.price - a.price,
    );
  $("#result-count").textContent = list.length + " sản phẩm";
  $("#products").innerHTML =
    list
      .slice(0, limit)
      .map(
        (p) => `<article class="product ${p.inStock ? "" : "sold-out"}">
        <button class="product-image" data-detail="${p.id}" aria-label="Xem ${p.brand} ${p.name}"><span class="tag">${gender[p.gender]}</span><img src="${p.image}" alt="${p.brand} ${p.name}" loading="lazy" decoding="async" width="960" height="960"></button>
        <div class="product-brand">${p.brand}</div><h3>${p.name}</h3><div class="product-meta">${gender[p.gender]} · ${p.volume}</div>
        <div class="prices"><strong>${money(p.price)}</strong>${p.oldPrice ? `<del>${money(p.oldPrice)}</del>` : ""}</div>
        <button class="buy" ${p.inStock ? `data-buy="${p.id}"` : "disabled"}>${p.inStock ? "Mua ngay ↗" : "Hết hàng"}</button></article>`,
      )
      .join("") ||
    '<p class="empty">Chưa tìm thấy mùi hương phù hợp. Thử tên khác nhé.</p>';
  $("#more").hidden = list.length <= limit;
}

function openDetail(id) {
  const p = products.find(product => product.id === id);
  if (!p) return;
  $('#detail-content').innerHTML = `<div class="detail-gallery">${p.images.map((src,i) => `<figure><img src="${src}" alt="${p.brand} ${p.name} — ảnh ${i+1}" decoding="async"><figcaption>Ảnh ${i+1} / 2</figcaption></figure>`).join('')}</div><div class="detail-body"><div class="eyebrow">${p.brand}</div><h2>${p.name}</h2><p>${gender[p.gender]} · ${p.volume}</p><div class="prices"><strong>${money(p.price)}</strong></div><p class="detail-offer">1 chai ${money(p.price)} + 22.000đ ship<br>2 chai ${money(p.comboPrice)} · Miễn phí ship</p><button class="button" data-buy="${p.id}">Mua ngay ↗</button></div>`;
  $('#detail').showModal();
  $('#detail').scrollTop = 0;
}
function validQuantity(value) {
  const quantity = Number(value);
  return Number.isInteger(quantity) && quantity >= 1 && quantity <= 2;
}
function quote(quantity, product = selectedProduct) {
  if (!validQuantity(quantity))
    throw new RangeError("Số lượng phải từ 1 đến 2.");
  if (!product || !product.inStock) throw new Error("Sản phẩm đã hết hàng.");
  const subtotal = Number(quantity) === 2 ? product.comboPrice : product.price;
  const shipping = Number(quantity) === 1 ? 22000 : 0;
  return { subtotal, shipping, total: subtotal + shipping };
}
function updateTotal() {
  const input = $("#quantity");
  const valid = validQuantity(input.value);
  input.setCustomValidity(
    valid ? "" : "Vui lòng nhập số lượng nguyên từ 1 đến 2.",
  );
  input.setAttribute("aria-invalid", String(!valid));
  $("#quantity-error").hidden = valid;
  const price = valid && selectedProduct ? quote(Number(input.value)) : null;
  $("#purchase-subtotal").textContent = price ? money(price.subtotal) : "—";
  $("#purchase-shipping").textContent = price
    ? price.shipping
      ? money(price.shipping)
      : "Miễn phí"
    : "—";
  $("#purchase-total").textContent = price ? money(price.total) : "—";
  document.querySelectorAll('[data-offer]').forEach(button => {
    const active = valid && Number(button.dataset.offer) === Number(input.value);
    button.classList.toggle('selected', active);
    button.setAttribute('aria-pressed', String(active));
  });
  $("#quantity-minus").disabled = valid && Number(input.value) <= 1;
  $("#quantity-plus").disabled = valid && Number(input.value) >= 2;
}
function openPurchase(id) {
  if (isSubmitting) return;
  const product = products.find(p => p.id === id);
  if (!product || !product.inStock) return;
  if ($("#detail").open) $("#detail").close();
  selectedProduct = { ...product };
  $("#purchase-form").reset();
  $("#purchase-status").textContent = "";
  $("#purchase-image").src = product.image;
  $("#purchase-image").alt = product.brand + " " + product.name + " — ảnh 1";
  $("#purchase-image-second").src = product.images[1];
  $("#purchase-image-second").alt = product.brand + " " + product.name + " — ảnh 2";
  $("#purchase-brand").textContent = product.brand;
  $("#purchase-name").textContent = product.name + " · " + product.volume;
  $("#purchase-price").textContent = money(product.price);
  $('#purchase-offer').innerHTML = `<div class="offer-heading">Chọn số lượng</div><div class="offer-grid">${[1,2].map(q => {
    const price = quote(q, product);
    return `<button type="button" class="offer-choice" data-offer="${q}" aria-pressed="false"><span>${q} chai</span><strong>${(price.subtotal / 1000).toLocaleString("vi-VN")}k</strong><small>${q === 1 ? '+22k ship' : 'Free ship'}</small></button>`;
  }).join('')}</div>`;
  updateTotal();
  $("#purchase").showModal();
  $("#purchase").scrollTop = 0;
  $("#buyer-name").focus();
}
function stepQuantity(delta) {
  const input = $("#quantity");
  input.value = validQuantity(input.value)
    ? Math.min(2, Math.max(1, Number(input.value) + delta))
    : 1;
  updateTotal();
}
function purchasePayload(product, quantity, buyer) {
  return {
    fullname: buyer.name,
    phone: buyer.phone,
    address: buyer.address,
    quantity: String(quantity),
    category: product.brand + " " + product.name + " · " + product.volume,
    note: buyer.note,
    timestamp: new Date().toISOString(),
  };
}
async function sendPurchase(payload) {
  if (!URLscript.trim())
    throw new Error(
      "Chức năng đặt hàng chưa được kết nối. Vui lòng thử lại sau.",
    );
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
    const response = await fetch(URLscript, {
      method: "POST",
      body: new URLSearchParams(payload),
      signal: controller.signal,
    });
    if (!response.ok)
      throw new Error(
        "Chưa gửi được thông tin. Vui lòng kiểm tra trước khi gửi lại.",
      );
    // Script có thể trả text, {result:"success"} hoặc {success:true}.
    // Chỉ chặn khi phản hồi JSON ghi rõ có lỗi.
    const text = await response.text();
    let result;
    try {
      result = JSON.parse(text);
    } catch {
      /* Phản hồi text cũng hợp lệ. */
    }
    if (
      result &&
      (result.success === false ||
        result.result === "error" ||
        result.status === "error" ||
        result.error)
    ) {
      throw new Error(
        "Cửa hàng chưa xác nhận đơn. Vui lòng kiểm tra trước khi gửi lại.",
      );
    }
  } finally {
    clearTimeout(timeout);
  }
}
function showOrderSuccess(payload, orderTotal) {
  $("#purchase").close();
  $("#success-phone").textContent = payload.phone;
  $("#success-product").textContent = payload.category;
  $("#success-quantity").textContent = payload.quantity + " chai";
  $("#success-total").textContent = money(
    orderTotal,
  );
  $("#purchase-form").reset();
  $("#purchase-status").textContent = "";
  $("#order-success").showModal();
  $("#success-continue").focus();
}
$("#success-continue").addEventListener("click", () => {
  $("#order-success").close();
  $("#collection").scrollIntoView({ behavior: "smooth" });
});
$("#purchase-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  if (typeof fbq === "function") fbq("track", "InitiateCheckout");
  if (isSubmitting) return;
  updateTotal();
  const buyer = {
    name: $("#buyer-name").value.trim(),
    phone: $("#buyer-phone").value.trim(),
    address: $("#buyer-address").value.trim(),
    note: $("#buyer-note").value.trim(),
  };
  for (const [key, selector] of [
    ["name", "#buyer-name"],
    ["address", "#buyer-address"],
  ]) {
    $(selector).setCustomValidity(buyer[key] ? "" : "Vui lòng nhập thông tin.");
  }
  const phoneDigits = buyer.phone.replace(/\D/g, "");
  $("#buyer-phone").setCustomValidity(
    /^[+0-9() .-]+$/.test(buyer.phone) &&
      phoneDigits.length >= 9 &&
      phoneDigits.length <= 15
      ? ""
      : "Vui lòng nhập số điện thoại hợp lệ (9–15 chữ số).",
  );
  if (!selectedProduct || !selectedProduct.inStock || !$("#purchase-form").reportValidity()) return;
  const payload = purchasePayload(
    selectedProduct,
    Number($("#quantity").value),
    buyer,
  );
  const orderTotal = quote(Number(payload.quantity)).total;
  const submitButton = $('#purchase-form button[type="submit"]');
  const originalLabel = submitButton.textContent;
  isSubmitting = true;
  submitButton.disabled = true;
  submitButton.textContent = "Đang gửi...";
  $("#purchase-status").textContent = "Đang gửi thông tin mua hàng...";
  try {
    await sendPurchase(payload);
    if (typeof fbq === "function") fbq("track", "Purchase", {
      value: orderTotal,
      currency: "VND",
    });
    showOrderSuccess(payload, orderTotal);
  } catch (error) {
    $("#purchase-status").textContent =
      error.name === "AbortError"
        ? "Chưa nhận được xác nhận từ cửa hàng. Vui lòng kiểm tra lại trước khi gửi lại."
        : error instanceof TypeError || error instanceof SyntaxError
          ? "Không nhận được xác nhận đơn hàng. Vui lòng kiểm tra lại trước khi gửi lại."
          : error.message;
  } finally {
    isSubmitting = false;
    submitButton.disabled = false;
    submitButton.textContent = originalLabel;
  }
});
for (const selector of ["#buyer-name", "#buyer-phone", "#buyer-address"]) {
  $(selector).addEventListener("input", () =>
    $(selector).setCustomValidity(""),
  );
}
$("#quantity").addEventListener("input", updateTotal);
$("#quantity-minus").onclick = () => stepQuantity(-1);
$("#quantity-plus").onclick = () => stepQuantity(1);

document.addEventListener("click", (e) => {
  const offer = e.target.closest('[data-offer]');
  if (offer && !isSubmitting) {
    $('#quantity').value = offer.dataset.offer;
    updateTotal();
  }
  const buy = e.target.closest("[data-buy]");
  if (buy) openPurchase(Number(buy.dataset.buy));
  const detail = e.target.closest("[data-detail]");
  if (detail) openDetail(Number(detail.dataset.detail));
  const close = e.target.closest(".close");
  if (close) close.closest("dialog").close();
  const guide = e.target.closest("[data-guide]");
  if (guide) {
    setFilter(guide.dataset.guide);
    $("#collection").scrollIntoView({ behavior: "smooth" });
  }
});
function setFilter(f) {
  filter = f;
  limit = 8;
  document
    .querySelectorAll("[data-filter]")
    .forEach((b) => b.classList.toggle("active", b.dataset.filter === f));
  render();
}
document
  .querySelectorAll("[data-filter]")
  .forEach((b) => (b.onclick = () => setFilter(b.dataset.filter)));
$("#search").oninput = () => {
  limit = 8;
  render();
};
$("#sort").onchange = render;
$("#more").onclick = () => {
  limit += 8;
  render();
};
document.querySelectorAll("dialog").forEach((d) =>
  d.addEventListener("click", (e) => {
    if (e.target === d) {
      const r = d.getBoundingClientRect();
      if (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      )
        d.close();
    }
  }),
);
render();
