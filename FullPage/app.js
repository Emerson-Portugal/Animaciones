const section = new fullpage('#fullpage',
    {
        scrollingSpeed: 800, //Tiempo de scoll(tiempo al bajar)
        autoScrolling: true, // ya no funsiona las teclas, es por medio del mouse
        fitToSection: true, // Lo divide por secciones(Es lo mas importante)
        //scrollBar: false, // Le da un tiempo (creo)
        //easing: 'easeInOutCubic',
        //easingcss3: 'ease',
        //loopBottom: false, // Lo reinicia al llegar al final
        //loopTop: true,// Lo reinicia al llegar al inicio
        //loopHorizontal: true,
        //continuousVertical: true, // llegal al final Y comienza de nuevo, pero sin cortar la animacion
        //continuousHorizontal: false,
        //scrollHorizontally: true,
        //interlockedSlides: true,
        //dragAndMove: true,
        //offsetSections: true,
        //resetSliders: true,
        //fadingEffect: true,
        //normalScrollElements: '#element1, .element2',
        //scrollOverflow: true,
        //scrollOverflowMacStyle: true,
        //scrollOverflowReset: false,
        //touchSensitivity: 50,
        //bigSectionsDestination: null,
    });