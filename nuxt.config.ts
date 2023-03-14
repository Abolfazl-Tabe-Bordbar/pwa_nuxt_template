export default defineNuxtConfig({
    modules : [
        "@vite-pwa/nuxt"
    ],

    pwa : {
        manifest : {
            name : "Abolfazl Tabe Bordbar",
            short_name : "ATB",
            description : "This a test web applicaion",
            icons : [
                {
                    src : "/64.png",
                    sizes : "64x64",
                    type : "image/png"
                },
                {
                    src : "/144.png",
                    sizes : "144x144",
                    type : "image/png"
                },
                {
                    src : "/192.png",
                    sizes : "192x192",
                    type : "image/png"
                },
                {
                    src : "/512.png",
                    sizes : "512x512",
                    type : "image/png"
                },
            ]
        },
        workbox : {
            navigateFallback : "/",

        },
        devOptions : {
            enabled : true,
            type : "module",
        },
        
    }
})