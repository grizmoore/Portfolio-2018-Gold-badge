jQuery(document).ready(function ($) {
    new Twitch.Embed("twitch-embed", {
        width:1280,
        height:720,
        channel: "grizmoore",
        theme: "dark"
        
    })
console.log($('#collapse-image'))
    $("[data-toggle='toggle']").click(function() {
        var selector = $(this).data("target");
        $(selector).toggleClass('in');
        
    });

    $("#collapse-image").click(function () {
        let collapseToggle = $(this).className
        if($(collapseToggle == "")){
            
            $(this).toggleClass('spin-animate')
        } 
    })
// using code from https://css-tricks.com/snippets/jquery/smooth-scrolling/ refrence this moving forward
    $(function() {
       // Select all links with hashes
        $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                return false;
                } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
                };
            });
            }
        }
        });
    });
});
