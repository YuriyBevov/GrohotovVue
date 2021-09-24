export class SuperSlider {
    constructor(cl, opt = null) {
        this.spaceBetween  = opt.spaceBetween;
        this.slidesPerView = opt.slidesPerView ? opt.slidesPerView : 4;

        this.slideByClick  = opt.slideByClick;

        this.slider        = document.querySelector(cl);
        this.sliderWrapper = this.slider.firstChild;

        this.slides        = this.sliderWrapper.querySelectorAll('.custom-slide');
        this.slideWidth    = ((this.slider.clientWidth + this.spaceBetween) - (this.spaceBetween * this.slidesPerView)) / this.slidesPerView;
        this.slideMinWidth = 305;
        this.slidesLength  = this.slides.length;
        this.currentSlide  = 0;
        this.activeSlide   = this.slides[this.currentSlide];

        this.sliderPos = 0;
        this.navigation    = opt.navigation;
        this.prevBtn       = this.slider.querySelector(opt.navigation.prevBtn);
        this.nextBtn       = this.slider.querySelector(opt.navigation.nextBtn);
    }

    setSpaceBetween() {
        this.slides.forEach(slide => {
            slide.style.marginRight = this.spaceBetween + 'px';
        })
    }

    setSlidesPerView() {
        this.slideWidth < this.slideMinWidth ?
        this.slideWidth = this.slideMinWidth : null

        this.slides.forEach(slide => {
            slide.style.minWidth = this.slideWidth + 'px';
        })
    }

    lockBtn(btn) {
        !btn.classList.contains('disabled') ?
        btn.classList.add('disabled') && btn.setAttribute('disabled', true) : null
    }

    unlockBtn(btn) {
        btn.classList.contains('disabled') ?
        btn.classList.remove('disabled') && btn.setAttribute('disabled', false) : null
    }

    slideForward() {
        if(this.currentSlide !== this.slidesLength - this.slidesPerView) {
            this.unlockBtn(this.prevBtn)
            this.currentSlide += 1;
            this.activeSlide = this.slides[this.currentSlide];

            this.sliderPos -= this.slideWidth + this.spaceBetween;
            this.sliderWrapper.style.transform = `translateX(${this.sliderPos}px)`;
        } 
        
        if(this.currentSlide === this.slidesLength - this.slidesPerView) {
            this.lockBtn(this.nextBtn)
        }
    }

    slideBack() {
        if(this.currentSlide !== 0) {
            this.unlockBtn(this.nextBtn)
            this.currentSlide -= 1
            this.activeSlide = this.slides[this.currentSlide];
            this.sliderPos += this.slideWidth + this.spaceBetween;
            this.sliderWrapper.style.transform = `translateX(${this.sliderPos}px)`;
        } 
        
        if(this.currentSlide === 0) {
            this.lockBtn(this.prevBtn)
        }
    }

    activateNavigation() {
        this.prevBtn.classList.add('disabled');

        this.prevBtn.addEventListener('click', () => {
            this.slideBack()
        })

        this.nextBtn.addEventListener('click', () => {
            this.slideForward()
        })
    }

    init() {
        this.slider.classList.add('js-init');
        this.slider.style.overflow = 'hidden';
        this.sliderWrapper.style.display = 'flex';
        this.sliderWrapper.style.flexWrap = 'nowrap';
        this.activeSlide.classList.add('active');
        
        this.spaceBetween ?
        this.setSpaceBetween() : null

        this.slidesPerView ?
        this.setSlidesPerView() : null

        this.navigation ?
        this.activateNavigation() : null
    }
} 
