var RAW_BASE_URL = "https://raw.githubusercontent.com/agarcabin/doubao-ime-icons/main";

var COPY_ICON = '<svg viewBox="0 0 20 20" aria-hidden="true"><rect x="6.5" y="6.5" width="9" height="9" rx="1.5"></rect><path d="M13.5 6.5V5A1.5 1.5 0 0 0 12 3.5H5A1.5 1.5 0 0 0 3.5 5v7A1.5 1.5 0 0 0 5 13.5h1.5"></path></svg>';

var collections = [
  {
    id: "animated",
    number: "01",
    title: "动态图标",
    description: "GIF 动起来，换一个会呼吸的键盘角落",
    kind: "动态",
    tag: "GIF",
    items: [
      { file: "person-circle.gif", name: "跃动人物", detail: "GIF · 301 × 301" },
      { file: "rainbow-ring.gif", name: "彩色光环", detail: "GIF · 370 × 370" },
      { file: "color-dots.gif", name: "彩点循环", detail: "GIF · 355 × 356" },
      { file: "person-cutout.gif", name: "人物剪影", detail: "GIF · 270 × 270" },
      { file: "cat-scratch.gif", name: "猫咪挠挠", detail: "GIF · 512 × 512" },
      { file: "mi-logo.gif", name: "小米闪动", detail: "GIF · 240 × 240" },
      { file: "yellow-ring.gif", name: "黄色圆环", detail: "GIF · 720 × 540" },
      { file: "blue-orbit.gif", name: "蓝色轨迹", detail: "GIF · 364 × 354" },
      { file: "panda-dance.gif", name: "熊猫摇摆", detail: "GIF · 310 × 310" },
      { file: "miku.gif", name: "初音未来", detail: "GIF · 302 × 480" }
    ]
  },
  {
    id: "static",
    number: "02",
    title: "静态图标",
    description: "清爽、稳定，适合长期放在工具栏里",
    kind: "静态",
    tag: "PNG",
    items: [
      { file: "static-red-b.png", name: "红色 B 标", detail: "PNG · 静态图标" },
      { file: "static-blue-v.png", name: "蓝色 V 标", detail: "PNG · 静态图标" }
    ]
  },
  {
    id: "default",
    number: "03",
    title: "默认图标",
    description: "保留一个低调的默认选项，随时可以切回来",
    kind: "默认",
    tag: "PNG",
    items: [
      { file: "default-doubao.png", name: "黑白默认标", detail: "PNG · 默认图标" }
    ]
  }
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function createCard(collection, item) {
  var imagePath = "icons/" + collection.id + "/" + item.file;
  var rawUrl = RAW_BASE_URL + "/" + imagePath;
  var cardClass = collection.id + "-card";
  var safeUrl = escapeHtml(rawUrl);
  var safeName = escapeHtml(item.name);

  return [
    '<article class="icon-card ' + cardClass + '" tabindex="0" data-copy-url="' + safeUrl + '" data-copy-name="' + safeName + '">',
    '  <div class="artboard">',
    '    <span class="format-tag">' + collection.tag + "</span>",
    '    <img src="' + imagePath + '" alt="' + safeName + '" loading="lazy">',
    '    <span class="copy-overlay">点击复制 ' + COPY_ICON + "</span>",
    "  </div>",
    '  <div class="card-body">',
    '    <div class="card-title-row"><h4>' + safeName + '</h4><span class="card-kind">' + collection.kind + "</span></div>",
    '    <p class="card-meta" title="' + safeUrl + '">' + escapeHtml(item.detail) + " · Raw 直链</p>",
    '    <button class="copy-button" type="button" data-copy-url="' + safeUrl + '" data-copy-name="' + safeName + '" aria-label="复制 ' + safeName + ' 的直链">复制直链 ' + COPY_ICON + "</button>",
    "  </div>",
    "</article>"
  ].join("");
}

function renderCollections() {
  var target = document.getElementById("icon-sections");
  var total = 0;

  target.innerHTML = collections.map(function (collection) {
    total += collection.items.length;
    return [
      '<section class="category-section" id="' + collection.id + '" aria-labelledby="' + collection.id + '-title">',
      '  <div class="section-heading">',
      "    <div>",
      '      <span class="section-number">' + collection.number + "</span>",
      '      <h3 id="' + collection.id + '-title">' + collection.title + "</h3>",
      "      <p>" + collection.description + "</p>",
      "    </div>",
      '    <span class="section-count">' + collection.items.length + " 个素材</span>",
      "  </div>",
      '  <div class="icon-grid">' + collection.items.map(function (item) {
        return createCard(collection, item);
      }).join("") + "</div>",
      "</section>"
    ].join("");
  }).join("");

  document.querySelector('[data-stat="total"]').textContent = total;
  collections.forEach(function (collection) {
    var stat = document.querySelector('[data-stat="' + collection.id + '"]');
    var count = document.querySelector('[data-category-count="' + collection.id + '"]');
    if (stat) stat.textContent = collection.items.length;
    if (count) count.textContent = collection.items.length;
  });
}

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }

  return new Promise(function (resolve, reject) {
    var input = document.createElement("textarea");
    input.value = text;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.left = "-9999px";
    document.body.appendChild(input);
    input.select();
    input.setSelectionRange(0, input.value.length);
    var copied = false;
    try {
      copied = document.execCommand("copy");
    } catch (error) {
      copied = false;
    }
    document.body.removeChild(input);
    if (copied) resolve();
    else reject(new Error("Clipboard unavailable"));
  });
}

var toastTimer;

function showToast(message, isError) {
  var toast = document.getElementById("toast");
  var messageNode = document.getElementById("toast-message");
  var check = toast.querySelector(".toast-check");
  messageNode.textContent = message;
  check.textContent = isError ? "!" : "✓";
  toast.classList.toggle("error", Boolean(isError));
  toast.hidden = false;
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(function () {
    toast.hidden = true;
  }, 2600);
}

function copyCard(card) {
  var url = card.getAttribute("data-copy-url");
  var name = card.getAttribute("data-copy-name") || "图标";
  copyText(url)
    .then(function () {
      showToast("已复制「" + name + "」直链");
    })
    .catch(function () {
      showToast("复制失败，请手动选择链接", true);
    });
}

function bindInteractions() {
  document.addEventListener("click", function (event) {
    var copyTarget = event.target.closest("[data-copy-url]");
    if (copyTarget) {
      event.stopPropagation();
      copyCard(copyTarget.classList.contains("icon-card") ? copyTarget : copyTarget.closest(".icon-card"));
      return;
    }

    var card = event.target.closest(".icon-card");
    if (card) copyCard(card);
  });

  document.querySelectorAll(".icon-card").forEach(function (card) {
    card.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        copyCard(card);
      }
    });
  });
}

function bindCategoryState() {
  var links = document.querySelectorAll(".category-link");
  var sections = document.querySelectorAll(".category-section");
  if (!("IntersectionObserver" in window)) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      links.forEach(function (link) {
        link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
      });
    });
  }, { rootMargin: "-18% 0px -68% 0px", threshold: 0 });

  sections.forEach(function (section) {
    observer.observe(section);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderCollections();
  bindInteractions();
  bindCategoryState();
});
