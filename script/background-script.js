class NavigationPage {
  constructor() {
    this.currentId = null;
    this.currentTab = null;
    this.tabContainerHeight = 70;
    this.lastScroll = 0;
    let self = this;

    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach((tab) => {
      tab.addEventListener('click', function (event) {
        self.onTabClick(event, this);
      });
    });

    window.addEventListener('scroll', () => {
      this.onScroll();
    });
    window.addEventListener('resize', () => {
      this.onResize();
    });
  }

  //   onTabClick(event, element) {
  //     event.preventDefault();
  //     const targetId = element.getAttribute('href').substring(1);
  //     const targetSection = document.getElementById(targetId);

  //     if (targetSection) {
  //       const scrollTop = targetSection.offsetTop - this.tabContainerHeight + 1;
  //       window.scrollTo({
  //         top: scrollTop,
  //         behavior: 'smooth',
  //       });
  //     }
  //   }

  onScroll() {
    this.checkHeaderPosition();
    this.findCurrentTabSelector();
    this.lastScroll = window.scrollY;
  }

  onResize() {
    if (this.currentId) {
      this.setSliderCss();
    }
  }

  checkHeaderPosition() {
    const headerHeight = 75;
    if (window.scrollY > headerHeight) {
      document
        .querySelector('.nav-container')
        .classList.add('nav-container--scrolled');
    } else {
      document
        .querySelector('.nav-container')
        .classList.remove('nav-container--scrolled');
    }

    const offset =
      document.querySelector('.nav').offsetTop +
      document.querySelector('.nav').offsetHeight -
      this.tabContainerHeight -
      headerHeight;

    if (window.scrollY > this.lastScroll && window.scrollY > offset) {
      document
        .querySelector('.nav-container')
        .classList.add('nav-container--move-up');
      document
        .querySelector('.nav-container')
        .classList.remove('nav-container--top-first');
      document
        .querySelector('.nav-container')
        .classList.add('nav-container--top-second');
    } else if (window.scrollY < this.lastScroll && window.scrollY > offset) {
      document
        .querySelector('.nav-container')
        .classList.remove('nav-container--move-up');
      document
        .querySelector('.nav-container')
        .classList.remove('nav-container--top-second');
      document
        .querySelector('.nav-container-container')
        .classList.add('nav-container--top-first');
    } else {
      document
        .querySelector('.nav-container')
        .classList.remove('nav-container--move-up');
      document
        .querySelector('.nav-container')
        .classList.remove('nav-container--top-first');
      document
        .querySelector('.nav-container')
        .classList.remove('nav-container--top-second');
    }
  }

  findCurrentTabSelector(element) {
    let newCurrentId;
    let newCurrentTab;
    let self = this;
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach((tab) => {
      const id = tab.getAttribute('href').substring(1);
      const offsetTop =
        document.getElementById(id).offsetTop - self.tabContainerHeight;
      const offsetBottom =
        document.getElementById(id).offsetTop +
        document.getElementById(id).offsetHeight -
        self.tabContainerHeight;
      if (window.scrollY > offsetTop && window.scrollY < offsetBottom) {
        newCurrentId = id;
        newCurrentTab = tab;
      }
    });
    if (this.currentId != newCurrentId || this.currentId === null) {
      this.currentId = newCurrentId;
      this.currentTab = newCurrentTab;
      this.setSliderCss();
    }
  }

  setSliderCss() {
    let width = 0;
    let left = 0;
    if (this.currentTab) {
      width = this.currentTab.offsetWidth + 'px';
      left = this.currentTab.offsetLeft + 'px';
    }
    document.querySelector('.nav-tab-slider').style.width = width;
    document.querySelector('.nav-tab-slider').style.left = left;
  }
}

new NavigationPage();
