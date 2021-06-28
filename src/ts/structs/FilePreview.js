"use strict";
var FilePreview = /** @class */ (function () {
    function FilePreview() {
    }
    FilePreview.prototype.call = function () {
        // FILE PREVIEW
        var fileInput = document.querySelector('.type--file');
        var previewImg = document.querySelector('.form__file-preview__image');
        var previewText = document.querySelector('.form__file-preview__label');
        fileInput.addEventListener('change', function () {
            // @ts-ignore
            var file = this.files[0];
            if (!file) {
                previewImg.style.display = null;
                previewText.style.display = null;
            }
            else {
                var reader = new FileReader();
                previewImg.style.display = "block";
                previewText.style.display = "none";
                reader.addEventListener("load", function () {
                    console.log(this);
                    previewImg.setAttribute('src', this.result);
                });
                reader.readAsDataURL(file);
            }
        });
    };
    return FilePreview;
}());
