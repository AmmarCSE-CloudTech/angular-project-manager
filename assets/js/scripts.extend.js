(function(){

    $('.password-toggle').on('click', function(e){
        e.preventDefault();

        if($(this).html()=='<i class="fa fa-eye"></i> Show')
        {
            $(this).html('<i class="fa fa-eye-slash"></i> Hide');
        } else {
            $(this).html('<i class="fa fa-eye"></i> Show');
        }
        $('#password').togglePassword();
    });

    /*var icheckInput = $('.project-color-radio input');
    icheckInput.iCheck({
        checkboxClass: 'icheck_box icheckbox_css',
        radioClass: 'icheck_box iradio_css',
        increaseArea: '20%',
        inheritClass: true
    });*/

    /*if($('#start-date-btn').length){
        $( "#start-date" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1,
            onClose: function( selectedDate ) {
                $( "#end-date" ).datepicker( "option", "minDate", selectedDate );
            }
        });
        $( "#end-date" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1,
            onClose: function( selectedDate ) {
                $( "#start-date" ).datepicker( "option", "maxDate", selectedDate );
            }
        });
    }*/

    function fullHeight(){
        if($(window).height()>=$('#login .container').outerHeight()){
            $('#login').height($(window).height());
        }else{
            $('#login').height($('#login .container').height()+100);
        }

    }
    fullHeight();


    $(window).resize(function(){
        fullHeight();
    })

    $('#calendar').fullCalendar({
        header:{
            left:   'month,agendaWeek,agendaDay',
            center: 'title',
            right:  'prev,today,next'
        },
        defaultDate: '2016-09-01',
        events: [
            {
                title: 'Start Phase / Phase 1',
                start: '2016-09-01',
                url: 'event1.html',
                backgroundColor: '#C2E98A',
                textColor: '#fff',
            },
            {
                title: 'Start Subphase / Phase 1.1',
                start: '2016-09-01',
                url: 'event1.html',
                backgroundColor: '#F3FBE8',
                textColor: '#A0D468',
            },
            {
                title: 'Start Subphase / Phase 1.3',
                start: '2016-09-01',
                url: 'event1.html',
                backgroundColor: '#F3FBE8',
                textColor: '#A0D468',
            },
            {
                title: 'Start Phase / Phase 4',
                start: '2016-09-06',
                url: 'event1.html',
                backgroundColor: '#FF8F84',
                textColor: '#fff',
            },
            {
                title: 'Start Subphase / Phase 4.1',
                start: '2016-09-06',
                url: 'event1.html',
                backgroundColor: '#FFE9E7',
                textColor: '#ED5565',
            },
            {
                title: 'Start Subphase / Phase 4.3',
                start: '2016-09-06',
                url: 'event1.html',
                backgroundColor: '#FFE9E7',
                textColor: '#ED5565',
            },
            {
                title: 'End Phase / Phase 1',
                start: '2016-09-09',
                url: 'event1.html',
                backgroundColor: '#C2E98A',
                textColor: '#fff',
                description: 'Vitae consectetur a non gravida curae blandit curabitur non vestibulum dis gravida dapibus ut pharetra taciti torquent.'
            },
            {
                title: 'End Phase / Phase 2',
                start: '2016-09-09',
                url: 'event1.html',
                backgroundColor: '#BDA6F2',
                textColor: '#fff',
            },
            {
                title: 'Start Phase / Phase 3',
                start: '2016-09-11',
                url: 'event1.html',
                backgroundColor: '#94C1DC',
                textColor: '#fff',
                description: 'Vitae consectetur a non gravida curae blandit curabitur non vestibulum dis gravida dapibus ut pharetra taciti torquent.',
            },
            {
                title: 'Start Subphase / Phase 3.1',
                start: '2016-09-11',
                url: 'event1.html',
                backgroundColor: '#EAF3F8',
                textColor: '#94C1DC',
            },
            {
                title: 'Start Subphase / Phase 3.3',
                start: '2016-09-11',
                url: 'event1.html',
                backgroundColor: '#EAF3F8',
                textColor: '#94C1DC',
            },
            {
                title: 'Start Subphase / subphase 2.1',
                start: '2016-09-14',
                url: 'event1.html',
                backgroundColor: '#7E8796',
                textColor: '#fff',
            },
            {
                title: 'End Phase / Phase 6',
                start: '2016-09-16',
                url: 'event1.html',
                backgroundColor: '#EDE7FB',
                textColor: '#AC92EC',
            },
            {
                title: 'End Phase / Phase 6',
                start: '2016-09-18',
                url: 'event1.html',
                backgroundColor: '#ABE5DA',
                textColor: '#fff',
            },
            {
                title: 'End Phase / Phase 4',
                start: '2016-09-20',
                url: 'event1.html',
                backgroundColor: '#FF8F84',
                textColor: '#fff',
            },
            {
                title: 'End Subphase / subphase 2.1',
                start: '2016-09-23',
                url: 'event1.html',
                backgroundColor: '#EDE7FB',
                textColor: '#AC92EC',
            },
            {
                title: 'End Phase / Phase 2',
                start: '2016-09-23',
                url: 'event1.html',
                backgroundColor: '#BDA6F2',
                textColor: '#fff',
            },
            {
                title: 'End Phase / Phase 3',
                start: '2016-09-25',
                url: 'event1.html',
                backgroundColor: '#94C1DC',
                textColor: '#fff',
                description: 'Vitae consectetur a non gravida curae blandit curabitur non vestibulum dis gravida dapibus ut pharetra taciti torquent.',
            },
            {
                title: 'Start subphase / subphase 5.1',
                start: '2016-09-28',
                url: 'event1.html',
                backgroundColor: '#E6E7EA',
                textColor: '#7E8796',
                description: 'Vitae consectetur a non gravida curae blandit curabitur non vestibulum dis gravida dapibus ut pharetra taciti torquent.',
            },
            {
                title: 'End Phase / Phase 5',
                start: '2016-09-29',
                url: 'event1.html',
                backgroundColor: '#C2E98A',
                textColor: '#fff',
            },
            {
                title: 'Start Phase / Phase 6',
                start: '2016-09-30',
                url: 'event1.html',
                backgroundColor: '#ABE5DA',
                textColor: '#fff',
            },

            // more events here ED5565
        ],
        eventRender: function(event, element) {
            element.popover({
                title: event.name,
                placement: 'top',
                trigger: 'hover',
                content: event.description,
            });
        },
        eventClick: function(event) {
            //if (event.url) {
            //    return false;
            //}
        }
    });


})();
