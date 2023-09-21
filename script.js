class Accordion {
  constructor(container, options = {}) {
    this.container = container;
    this.allowMultiple = options.allowMultiple || false;
    this.defaultIndex = options.defaultIndex ?? null;
    this.accordionItems = container.querySelectorAll(".accordion-item");

    this.init();
  }

  init() {
    this.container.addEventListener("click", (e) => {
      const target = e.target.closest(".accordion-header");
      if (!target) return;

      const item = target.closest(".accordion-item");
      if (!item) return;

      this.toggleItem(item);
    });

    this.expandItem(this.accordionItems[this.defaultIndex]);
  }

  toggleItem(item) {
    const isOpen = item.classList.contains("active");

    if (!this.allowMultiple) {
      this.closeAllItems();
    }

    isOpen ? this.collapseItem(item) : this.expandItem(item);
  }

  expandItem(item) {
    item.classList.add("active");
  }

  collapseItem(item) {
    item.classList.remove("active");
  }

  closeAllItems() {
    this.accordionItems?.forEach((item) => {
      this.collapseItem(item);
    });
  }
}

const accordionContainer = document.querySelector(".accordion-container");
const accordion = new Accordion(accordionContainer, {
  allowMultiple: false,
  defaultIndex: 0,
});
