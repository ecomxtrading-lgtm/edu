 $(function() {

    // Get the form.
    var form = $('#contact-form');

    // Get the messages div.
    var formMessages = $('.form-message');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData,
            timeout: 10000, // 10 saniye timeout
            beforeSend: function() {
                // Form gönderilirken mesaj alanını temizle
                $(formMessages).removeClass('success error');
                $(formMessages).text('Gönderiliyor...');
            }
        })
        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            // Set the message text.
            $(formMessages).text(response);

            // Clear the form.
            $('#contact-form input, #contact-form textarea, #contact-form select').val('');
        })
        .fail(function(xhr, status, error) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            // Set the message text based on error type.
            if (status === 'timeout') {
                $(formMessages).text('Bağlantı zaman aşımına uğradı. Lütfen tekrar deneyin.');
            } else if (status === 'error') {
                if (xhr.responseText && xhr.responseText !== '') {
                    $(formMessages).text(xhr.responseText);
                } else if (xhr.status === 0) {
                    $(formMessages).text('Bağlantı hatası. İnternet bağlantınızı kontrol edin veya VPN kullanıyorsanız kapatıp tekrar deneyin.');
                } else if (xhr.status === 404) {
                    $(formMessages).text('Sunucu bulunamadı. Lütfen daha sonra tekrar deneyin.');
                } else if (xhr.status >= 500) {
                    $(formMessages).text('Sunucu hatası oluştu. Lütfen daha sonra tekrar deneyin.');
                } else {
                    $(formMessages).text('Bir hata oluştu ve mesajınız gönderilemedi. Lütfen tekrar deneyin.');
                }
            } else {
                $(formMessages).text('Bir hata oluştu ve mesajınız gönderilemedi. Lütfen tekrar deneyin.');
            }
        });
    });

});