Disqus Comments
===============

    $("body").append $ "<div>",
      id: "disqus_thread"

    global.disqus_shortname = 'danielx'

    global.dsq = document.createElement('script')
    dsq.type = 'text/javascript'
    dsq.async = true
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js'
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq)