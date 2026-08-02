(() => {
  "use strict";

  document.documentElement.classList.add("js");

  document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const navigation = document.getElementById("site-nav");
    const mobileQuery = window.matchMedia("(max-width: 47.9375rem)");

    function setMenu(open, returnFocus = false) {
      if (!menuButton || !navigation) return;
      const isMobile = mobileQuery.matches;
      const shouldOpen = isMobile && open;
      navigation.hidden = isMobile && !shouldOpen;
      navigation.classList.toggle("is-open", shouldOpen);
      menuButton.setAttribute("aria-expanded", String(shouldOpen));
      menuButton.setAttribute("aria-label", shouldOpen ? "メニューを閉じる" : "メニューを開く");
      document.body.classList.toggle("menu-open", shouldOpen);

      if (shouldOpen) {
        const firstLink = navigation.querySelector("a");
        if (firstLink) firstLink.focus();
      } else if (returnFocus) {
        menuButton.focus();
      }
    }

    function syncMenu() {
      if (!navigation || !menuButton) return;
      if (mobileQuery.matches) {
        setMenu(false);
      } else {
        navigation.hidden = false;
        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      }
    }

    if (menuButton && navigation) {
      menuButton.addEventListener("click", () => {
        setMenu(menuButton.getAttribute("aria-expanded") !== "true", true);
      });

      navigation.addEventListener("click", (event) => {
        if (mobileQuery.matches && event.target.closest("a")) setMenu(false);
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
          setMenu(false, true);
        }
      });

      mobileQuery.addEventListener("change", syncMenu);
      syncMenu();
    }

    const copyButton = document.getElementById("copy-email");
    const copyStatus = document.getElementById("copy-status");

    function fallbackCopy(value) {
      const input = document.createElement("textarea");
      input.value = value;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      let copied = false;
      try {
        copied = typeof document.execCommand === "function" && document.execCommand("copy");
      } finally {
        input.remove();
      }
      return copied;
    }

    if (copyButton && copyStatus) {
      copyButton.addEventListener("click", async () => {
        const targetId = copyButton.dataset.copyTarget;
        const target = targetId ? document.getElementById(targetId) : null;
        const value = target ? target.textContent.trim() : "";
        let copied = false;

        if (value && navigator.clipboard && navigator.clipboard.writeText) {
          try {
            await navigator.clipboard.writeText(value);
            copied = true;
          } catch (error) {
            copied = false;
          }
        }

        if (!copied && value) copied = fallbackCopy(value);
        copyStatus.textContent = copied
          ? "メールアドレスをコピーしました。"
          : "コピーできませんでした。メールアドレスを選択してコピーしてください。";
      });
    }
  });
})();
