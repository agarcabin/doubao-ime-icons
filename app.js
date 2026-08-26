var RAW_BASE_URL = "https://cdn.jsdelivr.net/gh/agarcabin/doubao-ime-icons@main";

var COPY_ICON = '<svg viewBox="0 0 20 20" aria-hidden="true"><rect x="6.5" y="6.5" width="9" height="9" rx="1.5"></rect><path d="M13.5 6.5V5A1.5 1.5 0 0 0 12 3.5H5A1.5 1.5 0 0 0 3.5 5v7A1.5 1.5 0 0 0 5 13.5h1.5"></path></svg>';

var collections = [
  {
    id: "shared",
    number: "01",
    title: "群友分享",
    description: "原有素材统一收在这里，点击卡片复制直链",
    kind: "分享",
    tag: "混合",
    items: [
      { path: "icons/animated/person-circle.gif", name: "跃动人物", detail: "GIF · 301 × 301" },
      { path: "icons/animated/rainbow-ring.gif", name: "彩色光环", detail: "GIF · 370 × 370" },
      { path: "icons/animated/color-dots.gif", name: "彩点循环", detail: "GIF · 355 × 356" },
      { path: "icons/animated/person-cutout.gif", name: "人物剪影", detail: "GIF · 270 × 270" },
      { path: "icons/animated/cat-scratch.gif", name: "猫咪挠挠", detail: "GIF · 512 × 512" },
      { path: "icons/animated/mi-logo.gif", name: "小米闪动", detail: "GIF · 240 × 240" },
      { path: "icons/animated/yellow-ring.gif", name: "黄色圆环", detail: "GIF · 720 × 540" },
      { path: "icons/animated/blue-orbit.gif", name: "蓝色轨迹", detail: "GIF · 364 × 354" },
      { path: "icons/animated/panda-dance.gif", name: "熊猫摇摆", detail: "GIF · 310 × 310" },
      { path: "icons/animated/miku.gif", name: "初音未来", detail: "GIF · 302 × 480" },
      { path: "icons/static/static-red-b.png", name: "红色 B 标", detail: "PNG · 静态图标" },
      { path: "icons/static/static-blue-v.png", name: "蓝色 V 标", detail: "PNG · 静态图标" },
      { path: "icons/default/default-doubao.png", name: "黑白默认标", detail: "PNG · 默认图标" }
    ]
  },
  {
    id: "ime-presets",
    number: "02",
    title: "输入法预设",
    description: "按常见输入法与品牌整理的左上角图标",
    kind: "预设",
    tag: "PNG",
    folder: "input-methods",
    items: [
      { file: "sogou.png", name: "搜狗输入法", detail: "PNG · 品牌预设" },
      { file: "baidu.png", name: "百度输入法", detail: "PNG · 品牌预设" },
      { file: "wechat.png", name: "微信输入法", detail: "PNG · 品牌预设" },
      { file: "qq.png", name: "QQ 输入法", detail: "PNG · 品牌预设" },
      { file: "iflytek.png", name: "讯飞输入法", detail: "PNG · 语音预设" },
      { file: "huawei.png", name: "小艺输入法", detail: "PNG · 华为预设" },
      { file: "xiaomi.png", name: "小米输入法", detail: "PNG · 小米预设" },
      { file: "oppo.png", name: "OPPO 输入法", detail: "PNG · OPPO 预设" },
      { file: "vivo.png", name: "vivo 输入法", detail: "PNG · vivo 预设" },
      { file: "gboard.png", name: "Gboard", detail: "PNG · Google 预设" },
      { file: "swiftkey.png", name: "Microsoft SwiftKey", detail: "PNG · SwiftKey 预设" },
      { file: "rime.png", name: "Rime / 中州韵", detail: "PNG · Rime 预设" },
      { file: "samsung-keyboard.png", name: "三星键盘", detail: "PNG · Samsung 预设" },
      { file: "android-ime.png", name: "安卓系统输入法", detail: "PNG · Android 预设" },
      { file: "keyboard-generic.png", name: "通用键盘", detail: "PNG · 极简预设" },
      { file: "palm-input.png", name: "手心输入法", detail: "PNG · 通用预设" },
      { file: "touchpal.png", name: "触宝输入法", detail: "PNG · 通用预设" },
      { file: "transparent.png", name: "完全透明", detail: "PNG · 512 × 512" }
    ]
  },
  {
    id: "recommended-static",
    number: "03",
    title: "静态推荐",
    description: "适合长期使用的彩色 PNG 图标",
    kind: "静态",
    tag: "PNG",
    items: [
      { file: "cat.png", name: "猫咪", detail: "PNG · 彩色图标" },
      { file: "dog.png", name: "小狗", detail: "PNG · 彩色图标" },
      { file: "panda.png", name: "熊猫", detail: "PNG · 彩色图标" },
      { file: "rocket.png", name: "火箭", detail: "PNG · 彩色图标" },
      { file: "rainbow.png", name: "彩虹", detail: "PNG · 彩色图标" },
      { file: "sparkles.png", name: "闪光", detail: "PNG · 彩色图标" },
      { file: "fire.png", name: "火焰", detail: "PNG · 彩色图标" },
      { file: "moon.png", name: "月亮", detail: "PNG · 彩色图标" },
      { file: "cherry-blossom.png", name: "樱花", detail: "PNG · 彩色图标" },
      { file: "game-die.png", name: "骰子", detail: "PNG · 彩色图标" },
      { file: "music.png", name: "音符", detail: "PNG · 彩色图标" },
      { file: "coffee.png", name: "咖啡", detail: "PNG · 彩色图标" },
      { file: "star.png", name: "星星", detail: "PNG · 彩色图标" },
      { file: "blue-heart.png", name: "蓝色爱心", detail: "PNG · 彩色图标" },
      { file: "cloud.png", name: "云朵", detail: "PNG · 彩色图标" },
      { file: "party-popper.png", name: "庆祝", detail: "PNG · 彩色图标" }
    ]
  },
  {
    id: "recommended-animated",
    number: "04",
    title: "动态推荐",
    description: "轻量循环 GIF，适合放在左上角",
    kind: "动态",
    tag: "GIF",
    items: [
      { file: "pulse-orbit.gif", name: "脉冲轨迹", detail: "GIF · 256 × 256" },
      { file: "sparkle-burst.gif", name: "闪光呼吸", detail: "GIF · 256 × 256" },
      { file: "neon-heart.gif", name: "霓虹爱心", detail: "GIF · 256 × 256" },
      { file: "typing-dots.gif", name: "输入中", detail: "GIF · 256 × 256" },
      { file: "rainbow-beads.gif", name: "彩珠旋转", detail: "GIF · 256 × 256" },
      { file: "soft-wave.gif", name: "柔和波纹", detail: "GIF · 256 × 256" }
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
  var imagePath = item.path || ("icons/" + (collection.folder || collection.id) + "/" + item.file);
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
    '    <p class="card-meta" title="' + safeUrl + '">' + escapeHtml(item.detail) + " · CDN 直链</p>",
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

  var totalStat = document.querySelector('[data-stat="total"]');
  if (totalStat) totalStat.textContent = total;
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
