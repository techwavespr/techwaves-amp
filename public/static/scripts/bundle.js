$(document).ready(function() {
  var PAGES_WITH_PUBLICATIONS = ['/services/pr-release/', '/services/public-relations/', '/services/crypto-pr-agency/', '/services/cyber-security-pr/', '/services/pr-crisis-management/', '/services/fintech-marketing-agency/', '/services/tech-pr/'];
  // add scroll on menu item click
  $('a[href^="#"]').on('click', function(event) {
    var hrefId = this.getAttribute('href');
    var target = $(hrefId);
    if(target.length) {
      event.preventDefault();

      if (hrefId === '#booking_service') {
        $('.page-content__scrolled').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
      }

      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });


  var galleryClients = new Swiper(".gallery-clients", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });

  var galleryCases = new Swiper(".gallery-cases", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      "@0.75": {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      "@1.00": {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 2.5,
        centeredSlides: true,
        spaceBetween: 50,
      },
    },
  });

  var galleryReviews = new Swiper(".gallery-reviews", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var galleryPartners = new Swiper(".gallery-partners", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });


  // team btn
  $('#teamBtn').on('click', function() {
    if($(this).hasClass('-active')) {
      $(this).text('Show all');
    } else {
      $(this).text('Hide');
    }
    $(this).toggleClass('-active');
    $('.team-container__members .row.-toggled').toggleClass('-visible');
  });

  // loading posts onClick
  var actualPage = 1;
  $(document).on("click", "#loadPosts", function(e) {
    $(".page-blog__actions").addClass('-loading');

    var pages = $(this).attr('pages');
    var terms = $(this).attr('terms');

    var data =  {
      page_no: actualPage + 1,
      posts_per_page: 4,
      terms,
      action: 'load_more_blog_posts'
    };

    $.ajax({
      url: "/wp-admin/admin-ajax.php",
      type:'POST',
      data,
      success: function(html){
        actualPage++;

        $(".page-blog__actions").removeClass('-loading');
        $("#blogContent").append(html);

        if (pages == actualPage) {
          $(".page-blog__actions").hide();
        }
      }
    });
    return false;
  });

  var showTeamVideo= function() {
    if (!['/'].includes(location.pathname)) {
      return false;
    }

    if (typeof YT !== "undefined") {
      if (!hasTeamVideo && YT.Player) {
        hasTeamVideo = true;
        new YT.Player(document.querySelector("#team-video"), {
          height: 'auto',
          width: 'auto',
          host: 'https://www.youtube-nocookie.com',
          videoId: '2Ymyy6i4nWc'
        });
      };
    }

  };

  var showCalendar = function() {
    if (!(location.pathname === '/' || location.pathname.startsWith('/services/'))) {
      return false;
    }

    var vidDefer = document.getElementsByTagName('iframe');

    for (var i=0; i<vidDefer.length; i++) {
      if(vidDefer[i].getAttribute('data-src')) {
        if (!vidDefer[i].getAttribute('src')) {
          vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
        }
      }
    }
  };

  var isVisibleInViewport = function(element) {
    if (element) {
      var rect = element.getBoundingClientRect();

      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }

    return false;
  }

  var hasTeamVideo = false;

  if (location.pathname === '/') {
    setTimeout(() => {
      showTeamVideo();
    }, 4000);

    setTimeout(() => {
      showCalendar();
    }, 5000);
  } else {
    showCalendar();
  }




  var teamVideoIsVisible = isVisibleInViewport(document.querySelector("#team-video"));
  var calendlyIsVisible = isVisibleInViewport(document.querySelector("#calendly_blind"));

  if (teamVideoIsVisible) {
    showTeamVideo();
  }

  if (calendlyIsVisible) {
    showCalendar();
  }

  $('.go_to_booking').on('click', function() {
    showCalendar();
  });

  // init Isotope
  if (PAGES_WITH_PUBLICATIONS.includes(location.pathname)) {
    if (typeof Isotope !== "undefined") {
      var grid = $('.publications-gallery__grid').isotope({
        itemSelector: '.publications-gallery__item',
        layoutMode: 'masonry',
        percentPosition: !0,
        stagger: 30,
        // transitionDuration: '0.5s',
        // isOriginLeft:!isRTL
      });

      // bind filter button click
      $('.publications-gallery__buttons').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');

        grid.isotope({ filter: filterValue });
      });

      // change is-checked class on buttons
      $('.publications-gallery__buttons').each( function( i, buttonGroup ) {
        var buttonGroup = $(buttonGroup);

        buttonGroup.on( 'click', 'button', function() {
          buttonGroup.find('.-active').removeClass('-active');
          $(this).addClass('-active');
        });
      });

      // load more button
      var initShow = window.innerWidth > 991 ? 12 : 4;
      var counter = initShow;
      var iso = grid.data('isotope'); // get Isotope instance

      loadMore(initShow);

      function loadMore(toShow) {
        grid.find('.-hidden').removeClass('-hidden');
        grid.find('.-hidden-mobile').removeClass('-hidden-mobile');

        var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
          return item.element;
        });

        $(hiddenElems).addClass('-hidden');
        grid.isotope('layout');

        if (hiddenElems.length > 0) {
          $('.publications-gallery__load_more').removeClass('-hidden');
        } else {
          $('.publications-gallery__load_more').addClass('-hidden');
        }
      }

      //when load more button clicked
      $('.publications-gallery__load_more').click(function() {
        counter = counter + initShow;

        loadMore(counter);
      });

    }
  }


  // publication link click
  $('.publications-gallery__item_linkjs').on('click', function(event) {
    var publication_url = $(this).data('url');
    window.open(publication_url, '_blank').focus();
  });

});
