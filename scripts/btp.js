(function() {
    const script = document.createElement('script');
    script.src = 'btp.min.js?t=' + new Date().getTime();
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
})();
