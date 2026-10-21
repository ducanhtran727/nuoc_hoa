// Dán URL Web App Google Apps Script (đuôi /exec) vào đây.
const URLscript =
  "https://script.google.com/macros/s/AKfycbz93Qui7gLMjYwA6vEFj0GH7iUwys_WoKrK7Lrqkjl2qI1Eq0N87dJ9_bWe9rZoi_IM/exec";
let isSubmitting = false;

const products = [
  {
    "id": 32,
    "brand": "Chanel",
    "name": "Coco Mademoiselle EDP",
    "price": 1200000,
    "oldPrice": 4500000,
    "gender": "female",
    "image": "assets/catalog/coco-mademoiselle-new.webp",
    "inStock": true,
    "volume": "Chai lớn",
    "saleType": "full"
  },
  {
    "id": 33,
    "brand": "Gucci",
    "name": "Bloom EDP",
    "price": 1150000,
    "oldPrice": 3200000,
    "gender": "female",
    "image": "assets/catalog/gucci-bloom-new.webp",
    "inStock": true,
    "volume": "Chai lớn",
    "saleType": "full"
  },
  {
    "id": 34,
    "brand": "Chanel",
    "name": "Bleu de Chanel EDP",
    "price": 1200000,
    "oldPrice": 6200000,
    "gender": "male",
    "image": "assets/catalog/bleu-de-chanel-new.webp",
    "inStock": true,
    "volume": "Chai lớn",
    "saleType": "full"
  },
  {
    "id": 35,
    "brand": "Dior",
    "name": "Sauvage EDT",
    "price": 1100000,
    "oldPrice": 3800000,
    "gender": "male",
    "image": "assets/catalog/dior-sauvage-new.webp",
    "inStock": true,
    "volume": "Chai lớn",
    "saleType": "full"
  },
  {
    "id": 36,
    "brand": "Chanel",
    "name": "Coco Mademoiselle EDP",
    "price": 150000,
    "gender": "female",
    "image": "assets/catalog/coco-mademoiselle-new.webp",
    "inStock": true,
    "volume": "Chiết 10ml",
    "saleType": "decant"
  },
  {
    "id": 37,
    "brand": "Gucci",
    "name": "Bloom EDP",
    "price": 150000,
    "gender": "female",
    "image": "assets/catalog/gucci-bloom-new.webp",
    "inStock": true,
    "volume": "Chiết 10ml",
    "saleType": "decant"
  },
  {
    "id": 38,
    "brand": "Chanel",
    "name": "Bleu de Chanel EDP",
    "price": 150000,
    "gender": "male",
    "image": "assets/catalog/bleu-de-chanel-new.webp",
    "inStock": true,
    "volume": "Chiết 10ml",
    "saleType": "decant"
  },
  {
    "id": 39,
    "brand": "Dior",
    "name": "Sauvage EDT",
    "price": 150000,
    "gender": "male",
    "image": "assets/catalog/dior-sauvage-new.webp",
    "inStock": true,
    "volume": "Chiết 10ml",
    "saleType": "decant"
  },
  {
    "id": 0,
    "brand": "Chanel",
    "name": "Bleu de Chanel EDP",
    "gender": "male",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-00.webp",
    "inStock": false
  },
  {
    "id": 1,
    "brand": "Carolina Herrera",
    "name": "Good Girl EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-01.webp",
    "inStock": false
  },
  {
    "id": 2,
    "brand": "Chanel",
    "name": "Coco Mademoiselle EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-02.webp",
    "inStock": false
  },
  {
    "id": 3,
    "brand": "Creed",
    "name": "Aventus",
    "gender": "male",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-03.webp",
    "inStock": false
  },
  {
    "id": 4,
    "brand": "Dior",
    "name": "Miss Dior Absolutely Blooming EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-04.webp",
    "inStock": false
  },
  {
    "id": 5,
    "brand": "Gucci",
    "name": "Bloom EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-05.webp",
    "inStock": false
  },
  {
    "id": 6,
    "brand": "Gucci",
    "name": "Flora Gorgeous Gardenia EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-06.webp",
    "inStock": false
  },
  {
    "id": 7,
    "brand": "Jean Paul Gaultier",
    "name": "Le Male Le Parfum EDP Intense",
    "gender": "male",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-07.webp",
    "inStock": false
  },
  {
    "id": 8,
    "brand": "Jean Paul Gaultier",
    "name": "So Scandal! EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-08.webp",
    "inStock": false
  },
  {
    "id": 9,
    "brand": "Kilian",
    "name": "Black Phantom Memento Mori",
    "gender": "unisex",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-09.webp",
    "inStock": false
  },
  {
    "id": 10,
    "brand": "Lancôme",
    "name": "La Vie Est Belle EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-10.webp",
    "inStock": false
  },
  {
    "id": 11,
    "brand": "Le Labo",
    "name": "Another 13",
    "gender": "unisex",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-11.webp",
    "inStock": false
  },
  {
    "id": 12,
    "brand": "Le Labo",
    "name": "Rose 31",
    "gender": "unisex",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-12.webp",
    "inStock": false
  },
  {
    "id": 13,
    "brand": "Le Labo",
    "name": "Santal 33 EDP",
    "gender": "unisex",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-13.webp",
    "inStock": false
  },
  {
    "id": 14,
    "brand": "Maison Francis Kurkdjian",
    "name": "Baccarat Rouge 540 Extrait de Parfum",
    "gender": "unisex",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-14.webp",
    "inStock": false
  },
  {
    "id": 15,
    "brand": "Montblanc",
    "name": "Explorer EDP",
    "gender": "male",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-15.webp",
    "inStock": false
  },
  {
    "id": 16,
    "brand": "Narciso Rodriguez",
    "name": "Pure Musc For Her EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-16.webp",
    "inStock": false
  },
  {
    "id": 17,
    "brand": "Kilian",
    "name": "Good Girl Gone Bad",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-17.webp",
    "inStock": false
  },
  {
    "id": 18,
    "brand": "Dior",
    "name": "Sauvage",
    "gender": "male",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-18.webp",
    "inStock": false
  },
  {
    "id": 19,
    "brand": "Dolce & Gabbana",
    "name": "Light Blue Eau Intense Pour Femme EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-19.webp",
    "inStock": false
  },
  {
    "id": 20,
    "brand": "Jean Paul Gaultier",
    "name": "Scandal À Paris EDT",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-20.webp",
    "inStock": false
  },
  {
    "id": 21,
    "brand": "Lancôme",
    "name": "Trésor Midnight Rose EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-21.webp",
    "inStock": false
  },
  {
    "id": 22,
    "brand": "Marc Jacobs",
    "name": "Daisy Dream EDT",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-22.webp",
    "inStock": false
  },
  {
    "id": 23,
    "brand": "Montblanc",
    "name": "Signature EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-23.webp",
    "inStock": false
  },
  {
    "id": 24,
    "brand": "Narciso Rodriguez",
    "name": "Ambrée EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-24.webp",
    "inStock": false
  },
  {
    "id": 25,
    "brand": "Narciso Rodriguez",
    "name": "For Her EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-25.webp",
    "inStock": false
  },
  {
    "id": 26,
    "brand": "Paco Rabanne",
    "name": "Pure XS For Her EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-26.webp",
    "inStock": false
  },
  {
    "id": 27,
    "brand": "Parfums de Marly",
    "name": "Delina",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-27.webp",
    "inStock": false
  },
  {
    "id": 28,
    "brand": "Versace",
    "name": "Bright Crystal EDT",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-28.webp",
    "inStock": false
  },
  {
    "id": 29,
    "brand": "Parfums de Marly",
    "name": "Valaya EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-29.webp",
    "inStock": false
  },
  {
    "id": 30,
    "brand": "Yves Saint Laurent",
    "name": "Libre EDP",
    "gender": "female",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-30.webp",
    "inStock": false
  },
  {
    "id": 31,
    "brand": "Yves Saint Laurent",
    "name": "Y EDP",
    "gender": "male",
    "price": 150000,
    "volume": "Chiết 10ml",
    "image": "assets/catalog/perfume-31.webp",
    "inStock": false
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
  $("#result-count").textContent = list.length + " mùi hương";
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

function validQuantity(value) {
  const quantity = Number(value);
  return Number.isInteger(quantity) && quantity >= 1 && quantity <= 3;
}
function quote(quantity, product = selectedProduct) {
  if (!validQuantity(quantity))
    throw new RangeError("Số lượng phải từ 1 đến 3.");
  if (!product || !product.inStock) throw new Error("Sản phẩm đã hết hàng.");
  const subtotal = product.saleType === "full" ? product.price * Number(quantity) : {1:150000,2:289000,3:399000}[quantity];
  const shipping = Number(quantity) === 1 ? 22000 : 0;
  return { subtotal, shipping, total: subtotal + shipping };
}
function updateTotal() {
  const input = $("#quantity");
  const valid = validQuantity(input.value);
  input.setCustomValidity(
    valid ? "" : "Vui lòng nhập số lượng nguyên từ 1 đến 3.",
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
  $("#quantity-plus").disabled = valid && Number(input.value) >= 3;
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
  $("#purchase-image").alt = product.brand + " " + product.name;
  $("#purchase-brand").textContent = product.brand;
  $("#purchase-name").textContent = product.name + " · " + product.volume;
  $("#purchase-price").textContent = money(product.price);
  $('#purchase-offer').innerHTML = `<div class="offer-heading">Chọn số lượng ưu đãi</div><div class="offer-grid">${[1,2,3].map(q => {
    const price = quote(q, product);
    return `<button type="button" class="offer-choice" data-offer="${q}" aria-pressed="false"><span>${q === 1 ? 'Mua 1 chai' : `Combo ${q} chai`}</span><strong>${money(price.subtotal)}</strong><small>${q === 1 ? '+ 22.000đ phí ship' : 'MIỄN PHÍ SHIP'}</small></button>`;
  }).join('')}</div>`;
  updateTotal();
  $("#purchase").showModal();
  $("#purchase").scrollTop = 0;
  $("#buyer-name").focus();
}
function stepQuantity(delta) {
  const input = $("#quantity");
  input.value = validQuantity(input.value)
    ? Math.min(3, Math.max(1, Number(input.value) + delta))
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
  if (detail) {
    const p = products.find(p => p.id === Number(detail.dataset.detail));
    $("#detail-content").innerHTML =
      `<img class="detail-img" src="${p.image}" alt="${p.name}"><div class="detail-body"><div class="eyebrow">${p.brand}</div><h2>${p.name}</h2><p>${gender[p.gender]} · ${p.volume}</p><div class="prices"><strong>${money(p.price)}</strong>${p.oldPrice ? `<del>${money(p.oldPrice)}</del>` : ""}</div><p class="demo-note">${p.inStock ? (p.saleType === "full" ? "Mua 1 chai + 22.000đ phí ship. Mua từ 2 chai miễn phí ship." : "Chiết 10ml: 1 chai 150k + 22k ship; combo 2 chai 289k, 3 chai 399k miễn phí ship.") : "Sản phẩm hiện đã hết hàng."}</p><button class="button" ${p.inStock ? `data-buy="${p.id}"` : "disabled"}>${p.inStock ? "Mua ngay ↗" : "Hết hàng"}</button></div>`;
    $("#detail").showModal();
  }
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
