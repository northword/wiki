require(['gitbook', 'jquery'], function(gitbook, $) {

    function getRootPath() {
        var pathName = window.location.pathname.substring(1);
        var webName = pathName == '' ? '' : pathName.substring(0, pathName.indexOf('/'));
        if (webName == "") {
            return window.location.protocol + '//' + window.location.host;
        }
        else {
            return window.location.protocol + '//' + window.location.host + '/' + webName;
        }
    }

    //
    function generateSectionNavigator(){
        var anchorSelector = gitbook.state.config.pluginsConfig["theme-cap"]["anchor-selector"] || "h1,h2,h3"
        $(".page-inner .markdown-section").find(anchorSelector).each(function(){
            var cls="anchor-h1";
            if($(this).is("h2")){
                cls="anchor-h2";
            }
            if($(this).is("h3")){
                cls="anchor-h3";
            }
            var text = $(this).text();
            var href = $(this).attr("id");
            $(".book-anchor-body").append("<a id='an_"+text+"' class='anchor-text "+cls+"' title='"+text+"'  href='#"+href+"'>"+text+"</a>")
        });

        $(".book-anchor-title").click(function () {
            $(".book-anchor-body").toggle();
        });

        $(".book-header .pull-left").click(function () {
            //$(".book-summary").toggle();
        });

        $(".book-anchor-body>a").click(function(){
            $(".book-anchor-body>a").removeClass("selected");
            $(this).addClass("selected");
        });

        //
        var hash = decodeURIComponent(location.hash);
        if(hash){
            hash = hash.substring(1);
            $("#an_"+hash).addClass("selected");
        }
        
    }

    //
    function setBase(){
        //
        var $title = $(".header-inner .title");
        $title.text(gitbook.state.config.title);

        //
        var $search = $('#book-search-input');
        var placeholder = gitbook.state.config.pluginsConfig["theme-cap"]["search-placeholder"] || "Search in documentation"
        var searchBtn = gitbook.state.config.pluginsConfig["theme-cap"]["search-btn"] || "Search"
        $search.find("input").attr("placeholder",placeholder);
        $search.prepend("<span id='searchBtn'><i class='fa fa-search'></i></span>");
        $search.focus();
        // $("#searchBtn").click(function(e){});

        // //gitbook-link
        $(".summary .gitbook-link").hide();
        // $(".summary .divider").hide();
    }

    gitbook.events.on('start', function() {

    });

    gitbook.events.on('page.change', function() {
        setBase();
        generateSectionNavigator();
    });
});
