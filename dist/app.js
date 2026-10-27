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
    "image": "assets/catalog-20261027/ysl-y-2.webp",
    "images": [
      "assets/catalog-20261027/ysl-y-1.webp",
      "assets/catalog-20261027/ysl-y-2.webp"
    ],
    "inStock": true,
    "price": 280000,
    "maxPrice": 2900000,
    "volume": "10ml / 100ml",
    "variants": [
      {
        "price": 280000,
        "comboPrice": 500000,
        "volume": "Chiết 10ml",
        "saleType": "decant"
      },
      {
        "price": 2900000,
        "comboPrice": 5800000,
        "volume": "Chai 100ml",
        "saleType": "full"
      }
    ]
  },
  {
    "id": 102,
    "brand": "Yves Saint Laurent",
    "name": "MYSLF EDP",
    "gender": "male",
    "image": "assets/catalog-20261027/ysl-myslf-2.webp",
    "images": [
      "assets/catalog-20261027/ysl-myslf-1.webp",
      "assets/catalog-20261027/ysl-myslf-2.webp"
    ],
    "inStock": true,
    "price": 229000,
    "maxPrice": 2500000,
    "volume": "10ml / 100ml",
    "variants": [
      {
        "price": 229000,
        "comboPrice": 440000,
        "volume": "Chiết 10ml",
        "saleType": "decant"
      },
      {
        "price": 2500000,
        "comboPrice": 5000000,
        "volume": "Chai 100ml",
        "saleType": "full"
      }
    ]
  },
  {
    "id": 104,
    "brand": "Xerjoff",
    "name": "1861 Naxos EDP",
    "gender": "unisex",
    "image": "assets/catalog-20261027/xerjoff-naxos-2.webp",
    "images": [
      "assets/catalog-20261027/xerjoff-naxos-1.webp",
      "assets/catalog-20261027/xerjoff-naxos-2.webp"
    ],
    "inStock": true,
    "price": 390000,
    "maxPrice": 4500000,
    "volume": "10ml / 100ml",
    "variants": [
      {
        "price": 390000,
        "comboPrice": 700000,
        "volume": "Chiết 10ml",
        "saleType": "decant"
      },
      {
        "price": 4500000,
        "comboPrice": 9000000,
        "volume": "Chai 100ml",
        "saleType": "full"
      }
    ]
  },
  {
    "id": 106,
    "brand": "Tom Ford",
    "name": "Ombré Leather EDP",
    "gender": "unisex",
    "image": "assets/catalog-20261027/tom-ford-ombre-leather-2.webp",
    "images": [
      "assets/catalog-20261027/tom-ford-ombre-leather-1.webp",
      "assets/catalog-20261027/tom-ford-ombre-leather-2.webp"
    ],
    "inStock": true,
    "price": 299000,
    "maxPrice": 3200000,
    "volume": "10ml / 100ml",
    "variants": [
      {
        "price": 299000,
        "comboPrice": 598000,
        "volume": "Chiết 10ml",
        "saleType": "decant"
      },
      {
        "price": 3200000,
        "comboPrice": 6400000,
        "volume": "Chai 100ml",
        "saleType": "full"
      }
    ]
  },
  {
    "id": 108,
    "brand": "Parfums de Marly",
    "name": "Delina Exclusif Parfum",
    "gender": "female",
    "image": "assets/catalog-20261027/delina-exclusif-2.webp",
    "images": [
      "assets/catalog-20261027/delina-exclusif-1.webp",
      "assets/catalog-20261027/delina-exclusif-2.webp"
    ],
    "inStock": true,
    "price": 500000,
    "maxPrice": 6000000,
    "volume": "10ml / 75ml",
    "variants": [
      {
        "price": 500000,
        "comboPrice": 1000000,
        "volume": "Chiết 10ml",
        "saleType": "decant"
      },
      {
        "price": 6000000,
        "comboPrice": 12000000,
        "volume": "Chai 75ml",
        "saleType": "full"
      }
    ]
  },
  {
    "id": 110,
    "brand": "Le Labo",
    "name": "Another 13 EDP",
    "gender": "unisex",
    "image": "assets/catalog-20261027/another-13-2.webp",
    "images": [
      "assets/catalog-20261027/another-13-1.webp",
      "assets/catalog-20261027/another-13-2.webp"
    ],
    "inStock": true,
    "price": 550000,
    "maxPrice": 6500000,
    "volume": "10ml / 100ml",
    "variants": [
      {
        "price": 550000,
        "comboPrice": 1000000,
        "volume": "Chiết 10ml",
        "saleType": "decant"
      },
      {
        "price": 6500000,
        "comboPrice": 13000000,
        "volume": "Chai 100ml",
        "saleType": "full"
      }
    ]
  },
  {
    "id": 112,
    "brand": "Jean Paul Gaultier",
    "name": "Le Male Le Parfum EDP Intense",
    "gender": "male",
    "image": "assets/catalog-20261027/le-male-le-parfum-2.webp",
    "images": [
      "assets/catalog-20261027/le-male-le-parfum-1.webp",
      "assets/catalog-20261027/le-male-le-parfum-2.webp"
    ],
    "inStock": true,
    "price": 269000,
    "maxPrice": 2500000,
    "volume": "10ml / 75ml",
    "variants": [
      {
        "price": 269000,
        "comboPrice": 500000,
        "volume": "Chiết 10ml",
        "saleType": "decant"
      },
      {
        "price": 2500000,
        "comboPrice": 5000000,
        "volume": "Chai 75ml",
        "saleType": "full"
      }
    ]
  },
  {
    "id": 114,
    "brand": "Gucci",
    "name": "Bloom EDP",
    "gender": "female",
    "image": "assets/catalog-20261027/gucci-bloom-2.webp",
    "images": [
      "assets/catalog-20261027/gucci-bloom-1.webp",
      "assets/catalog-20261027/gucci-bloom-2.webp"
    ],
    "inStock": true,
    "price": 250000,
    "maxPrice": 2200000,
    "volume": "10ml / 100ml",
    "variants": [
      {
        "price": 250000,
        "comboPrice": 450000,
        "volume": "Chiết 10ml",
        "saleType": "decant"
      },
      {
        "price": 2200000,
        "comboPrice": 4400000,
        "volume": "Chai 100ml",
        "saleType": "full"
      }
    ]
  },
  {
    "id": 116,
    "brand": "Dior",
    "name": "Sauvage EDP",
    "gender": "male",
    "image": "assets/catalog-20261027/dior-sauvage-2.webp",
    "images": [
      "assets/catalog-20261027/dior-sauvage-1.webp",
      "assets/catalog-20261027/dior-sauvage-2.webp"
    ],
    "inStock": true,
    "price": 270000,
    "maxPrice": 2900000,
    "volume": "10ml / 100ml",
    "variants": [
      {
        "price": 270000,
        "comboPrice": 500000,
        "volume": "Chiết 10ml",
        "saleType": "decant"
      },
      {
        "price": 2900000,
        "comboPrice": 5800000,
        "volume": "Chai 100ml",
        "saleType": "full"
      }
    ]
  },
  {
    "id": 118,
    "brand": "Dior",
    "name": "Homme Intense EDP",
    "gender": "male",
    "image": "assets/catalog-20261027/dior-homme-intense-2.webp",
    "images": [
      "assets/catalog-20261027/dior-homme-intense-1.webp",
      "assets/catalog-20261027/dior-homme-intense-2.webp"
    ],
    "inStock": true,
    "price": 279000,
    "maxPrice": 2900000,
    "volume": "10ml / 100ml",
    "variants": [
      {
        "price": 279000,
        "comboPrice": 550000,
        "volume": "Chiết 10ml",
        "saleType": "decant"
      },
      {
        "price": 2900000,
        "comboPrice": 5800000,
        "volume": "Chai 100ml",
        "saleType": "full"
      }
    ]
  },
  {
    "id": 120,
    "brand": "Chanel",
    "name": "N°5 L’Eau EDT",
    "gender": "female",
    "image": "assets/catalog-20261027/chanel-no5-leau-2.webp",
    "images": [
      "assets/catalog-20261027/chanel-no5-leau-1.webp",
      "assets/catalog-20261027/chanel-no5-leau-2.webp"
    ],
    "inStock": true,
    "price": 359000,
    "maxPrice": 3500000,
    "volume": "10ml / 100ml",
    "variants": [
      {
        "price": 359000,
        "comboPrice": 650000,
        "volume": "Chiết 10ml",
        "saleType": "decant"
      },
      {
        "price": 3500000,
        "comboPrice": 7000000,
        "volume": "Chai 100ml",
        "saleType": "full"
      }
    ]
  },
  {
    "id": 122,
    "brand": "Chanel",
    "name": "Coco Mademoiselle L’Eau Privée",
    "gender": "female",
    "image": "assets/catalog-20261027/coco-leau-privee-2.webp",
    "images": [
      "assets/catalog-20261027/coco-leau-privee-1.webp",
      "assets/catalog-20261027/coco-leau-privee-2.webp"
    ],
    "inStock": true,
    "price": 350000,
    "maxPrice": 4500000,
    "volume": "10ml / 100ml",
    "variants": [
      {
        "price": 350000,
        "comboPrice": 650000,
        "volume": "Chiết 10ml",
        "saleType": "decant"
      },
      {
        "price": 4500000,
        "comboPrice": 9000000,
        "volume": "Chai 100ml",
        "saleType": "full"
      }
    ]
  },
  {
    "id": 124,
    "brand": "Chanel",
    "name": "Bleu de Chanel EDP",
    "gender": "male",
    "image": "assets/catalog-20261027/bleu-de-chanel-2.webp",
    "images": [
      "assets/catalog-20261027/bleu-de-chanel-1.webp",
      "assets/catalog-20261027/bleu-de-chanel-2.webp"
    ],
    "inStock": true,
    "price": 380000,
    "maxPrice": 4300000,
    "volume": "10ml / 100ml",
    "variants": [
      {
        "price": 380000,
        "comboPrice": 700000,
        "volume": "Chiết 10ml",
        "saleType": "decant"
      },
      {
        "price": 4300000,
        "comboPrice": 8600000,
        "volume": "Chai 100ml",
        "saleType": "full"
      }
    ]
  },
  {
    "id": 126,
    "brand": "Dior",
    "name": "Miss Dior Blooming Bouquet EDT",
    "gender": "female",
    "image": "assets/catalog-20261027/miss-dior-blooming-bouquet-2.webp",
    "images": [
      "assets/catalog-20261027/miss-dior-blooming-bouquet-1.webp",
      "assets/catalog-20261027/miss-dior-blooming-bouquet-2.webp"
    ],
    "inStock": true,
    "price": 220000,
    "maxPrice": 2900000,
    "volume": "10ml / 100ml",
    "variants": [
      {
        "price": 220000,
        "comboPrice": 400000,
        "volume": "Chiết 10ml",
        "saleType": "decant"
      },
      {
        "price": 2900000,
        "comboPrice": 5800000,
        "volume": "Chai 100ml",
        "saleType": "full"
      }
    ]
  },
  {
    "id": 128,
    "brand": "Gucci",
    "name": "Flora Gorgeous Gardenia EDP",
    "gender": "female",
    "image": "assets/catalog-20261027/gucci-flora-gardenia-2.webp",
    "images": [
      "assets/catalog-20261027/gucci-flora-gardenia-1.webp",
      "assets/catalog-20261027/gucci-flora-gardenia-2.webp"
    ],
    "inStock": true,
    "price": 250000,
    "maxPrice": 2900000,
    "volume": "10ml / 100ml",
    "variants": [
      {
        "price": 250000,
        "comboPrice": 480000,
        "volume": "Chiết 10ml",
        "saleType": "decant"
      },
      {
        "price": 2900000,
        "comboPrice": 5800000,
        "volume": "Chai 100ml",
        "saleType": "full"
      }
    ]
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
        <div class="prices price-range"><strong>${money(p.price)} – ${money(p.maxPrice)}</strong></div>
        <button class="buy" ${p.inStock ? `data-buy="${p.id}"` : "disabled"}>${p.inStock ? "Mua ngay ↗" : "Hết hàng"}</button></article>`,
      )
      .join("") ||
    '<p class="empty">Chưa tìm thấy mùi hương phù hợp. Thử tên khác nhé.</p>';
  $("#more").hidden = list.length <= limit;
}

let detailProduct = null;
let detailSize = 'decant';
function sizeOptions(product, selected, scope) {
  return `<div class="size-options" role="group" aria-label="Chọn thể tích">${product.variants.map(v => `<button type="button" class="size-option ${v.saleType === selected ? 'selected' : ''}" data-size-choice="${v.saleType}" data-size-scope="${scope}" aria-pressed="${v.saleType === selected}"><span>${v.volume}</span><strong>${money(v.price)}</strong></button>`).join('')}</div>`;
}
function openDetail(id) {
  if (isSubmitting) return;
  detailProduct = products.find(product => product.id === id);
  if (!detailProduct) return;
  detailSize = 'decant';
  const p = detailProduct;
  $('#detail-content').innerHTML = `<div class="detail-gallery">${p.images.map((src,i) => `<figure><img src="${src}" alt="${p.brand} ${p.name} — ảnh ${i+1}" decoding="async"><figcaption>Ảnh ${i+1} / 2</figcaption></figure>`).join('')}</div><div class="detail-body"><div class="eyebrow">${p.brand}</div><h2>${p.name}</h2><p>${gender[p.gender]}</p><p id="detail-selected-size"></p><div class="prices"><strong id="detail-price"></strong></div><div id="detail-sizes"></div><p class="detail-offer" id="detail-offer"></p><button class="button" id="detail-buy" data-buy="${p.id}">Mua ngay ↗</button></div>`;
  updateDetailSize('decant');
  $('#detail').showModal();
  $('#detail').scrollTop = 0;
}
function updateDetailSize(size) {
  const variant = detailProduct?.variants.find(v => v.saleType === size);
  if (!variant) return;
  detailSize = size;
  $('#detail-selected-size').textContent = 'Bạn đang chọn: ' + variant.volume;
  $('#detail-price').textContent = money(variant.price);
  $('#detail-sizes').innerHTML = sizeOptions(detailProduct, size, 'detail');
  $('#detail-offer').innerHTML = `<span>1 chai ${money(variant.price)} + 22.000đ ship</span><span>2 chai ${money(variant.comboPrice)} · Miễn phí ship</span>`;
  $('#detail-buy').dataset.buySize = size;
}
function selectPurchaseSize(size) {
  const product = products.find(p => p.id === selectedProduct?.id);
  const variant = product?.variants.find(v => v.saleType === size);
  if (!variant) return;
  selectedProduct = { ...product, ...variant };
  $('#purchase-name').textContent = product.name + ' · ' + variant.volume;
  $('#purchase-price').textContent = money(variant.price);
  $('#purchase-sizes').innerHTML = sizeOptions(product, size, 'purchase');
  $('#purchase-offer').innerHTML = `<div class="offer-heading">Chọn số lượng</div><div class="offer-grid">${[1,2].map(q => {
    const price = quote(q);
    return `<button type="button" class="offer-choice" data-offer="${q}" aria-pressed="false"><span>${q} chai</span><strong>${(price.subtotal / 1000).toLocaleString('vi-VN')}k</strong><small>${q === 1 ? '+22k ship' : 'Free ship'}</small></button>`;
  }).join('')}</div>`;
  updateTotal();
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
function openPurchase(id, size = "decant") {
  if (isSubmitting) return;
  const product = products.find(p => p.id === id);
  if (!product || !product.inStock) return;
  if ($("#detail").open) $("#detail").close();
  selectedProduct = { ...product };
  $("#purchase-form").reset();
  $("#purchase-status").textContent = "";
  $("#purchase-image").src = product.images[0];
  $("#purchase-image").alt = product.brand + " " + product.name + " — ảnh 1";
  $("#purchase-image-second").src = product.images[1];
  $("#purchase-image-second").alt = product.brand + " " + product.name + " — ảnh 2";
  $("#purchase-brand").textContent = product.brand;
  selectPurchaseSize(size);
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
  const sizeChoice = e.target.closest('[data-size-choice]');
  if (sizeChoice && !isSubmitting) {
    if (sizeChoice.dataset.sizeScope === 'detail') updateDetailSize(sizeChoice.dataset.sizeChoice);
    else selectPurchaseSize(sizeChoice.dataset.sizeChoice);
  }
  const offer = e.target.closest('[data-offer]');
  if (offer && !isSubmitting) {
    $('#quantity').value = offer.dataset.offer;
    updateTotal();
  }
  const buy = e.target.closest("[data-buy]");
  if (buy) openPurchase(Number(buy.dataset.buy), buy.dataset.buySize || "decant");
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
