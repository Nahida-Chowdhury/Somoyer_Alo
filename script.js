document.addEventListener("DOMContentLoaded", function () {

    /* ======================================================
       Mobile Menu Toggle
    ====================================================== */

    const menuBtn = document.getElementById("mobileMenuBtn");
    const nav = document.getElementById("customNavList");

    if (menuBtn && nav) {
        menuBtn.addEventListener("click", function () {
            nav.classList.toggle("active");
        });
    }

    /* ======================================================
       Mobile Dropdown
    ====================================================== */

    document.querySelectorAll(".has-dropdown > a").forEach(item => {

        item.addEventListener("click", function (e) {

            if (window.innerWidth <= 991) {
                e.preventDefault();
                this.parentElement.classList.toggle("open");
            }

        });

    });

    /* ======================================================
       Country Slider
    ====================================================== */

    const slideTrack = document.getElementById("sliderTrack");
    const dotsContainer = document.getElementById("dotsContainer");

    if (slideTrack && dotsContainer) {

        let currentPageIndex = 0;
        const totalPages = 3;
        let autoPlayInterval;

        const sliderDots = dotsContainer.getElementsByClassName("dot");

        function updateSliderPosition() {

            const percentageShift = currentPageIndex * 100;

            slideTrack.style.transform =
                `translate3d(-${percentageShift}%,0,0)`;

            for (let i = 0; i < sliderDots.length; i++) {
                sliderDots[i].classList.remove("active");
            }

            if (sliderDots[currentPageIndex]) {
                sliderDots[currentPageIndex].classList.add("active");
            }

        }

        function nextPage() {

            currentPageIndex++;

            if (currentPageIndex >= totalPages) {
                currentPageIndex = 0;
            }

            updateSliderPosition();

        }

        function startAutoPlay() {

            autoPlayInterval = setInterval(nextPage, 4000);

        }

        function resetAutoPlayTimer() {

            clearInterval(autoPlayInterval);
            startAutoPlay();

        }

        window.jumpToPage = function (index) {

            currentPageIndex = index;
            updateSliderPosition();
            resetAutoPlayTimer();

        };

        updateSliderPosition();
        startAutoPlay();

    }

});

