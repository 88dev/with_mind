(function ($) {
	
    $(document).ready(function () {
        var dateRangePickers = $('input[data-daterange="true"]');
        var defaultDateRangePickers = dateRangePickers.filter(function () {
           return !this.value;
        });
        dateRangePickers.daterangepicker({
            autoUpdateInput: false,
            showDropdowns: true,
            locale: {
                format: 'YYYY/MM/DD'
            },
            minYear: 2019,
            maxYear: 2023,
            minDate: 01/01/2019,
            maxDate: 12/31/2023
        });
        defaultDateRangePickers.daterangepicker({
            autoUpdateInput: false,
            showDropdowns: true,
            locale: {
                format: 'YYYY/MM/DD'
            },
            minYear: 2019,
            maxYear: 2023,
            minDate: 01/01/2019,
            maxDate: 12/31/2023
        });
        
        var datePickers = $('input[data-datepicker="true"]');
        var defaultDatePickers = datePickers.filter(function () {
            return !this.value;
        });
        datePickers.daterangepicker({
            autoUpdateInput: false,
            singleDatePicker: true,
            showDropdowns: true,
            locale: {
                format: 'YYYY/MM/DD'
            }
        });
        defaultDatePickers.daterangepicker({
            autoUpdateInput: false,
            singleDatePicker: true,
            showDropdowns: true,	  
            locale: {
                format: 'YYYY/MM/DD'
            } 
        });
      
          
        var regdate = $('input[name="regdate"]');
        if (regdate.length > 0) {			  
            regdate.on('apply.daterangepicker',  function(ev, picker) {		 
                var oneDay = 24 * 60 * 60 * 1000;  
                $(this).val(picker.startDate.format('YYYY/MM/DD') + ' - ' + picker.endDate.format('YYYY/MM/DD'));					  
            });
        }
        
        var calendar = $('input[name="calendar"]');	  
        if (calendar.length > 0) {		  
            calendar.on('apply.daterangepicker',  function(ev, picker) {
                $(this).val(picker.startDate.format('YYYY/MM/DD'));					 
            });
        }
        
        $(function() {
            $(document).on("click", ".cancelBtn", function() {		
                $('input[name=regdate]').val("");
                var dateRangePickers = $('input[data-daterange="true"]');
                var defaultDateRangePickers = dateRangePickers.filter(function () {
                   return !this.value;
                });
                dateRangePickers.daterangepicker({
                    autoUpdateInput: false,
                    showDropdowns: true,
                    locale: {
                        format: 'YYYY/MM/DD'
                    },
                    minYear: 2019,
                    maxYear: 2023,
                    minDate: 01/01/2019,
                    maxDate: 12/31/2023
                });
                defaultDateRangePickers.daterangepicker({
                    autoUpdateInput: false,
                    showDropdowns: true,
                    locale: {
                        format: 'YYYY/MM/DD'
                    },
                    minYear: 2019,
                    maxYear: 2023,
                    minDate: 01/01/2019,
                    maxDate: 12/31/2023
                });
                
                var regdate = $('input[name="regdate"]');
                if (regdate.length > 0) {			  
                    regdate.on('apply.daterangepicker',  function(ev, picker) {		 
                        var oneDay = 24 * 60 * 60 * 1000;  
                        $(this).val(picker.startDate.format('YYYY/MM/DD') + ' - ' + picker.endDate.format('YYYY/MM/DD'));					  
                    });
                }
                
                var calendar = $('input[name="calendar"]');	  
                if (calendar.length > 0) {		  
                    calendar.on('apply.daterangepicker',  function(ev, picker) {
                        $(this).val(picker.startDate.format('YYYY/MM/DD'));					 
                    });
                }
            });
        });
    }); 
  })(jQuery); // End of use strict
  