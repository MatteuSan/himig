class FilePreview {
    call() {
        // FILE PREVIEW
        const fileInput: any = document.querySelector('.type--file');
        const previewImg: any = document.querySelector('.form__file-preview__image');
        const previewText: any = document.querySelector('.form__file-preview__label');

        fileInput.addEventListener('change', function() {
            // @ts-ignore
            const file: any = this.files[0];

            if (!file) {
                previewImg.style.display = null;
                previewText.style.display = null;
            } else {
                const reader = new FileReader();

                previewImg.style.display = "block";
                previewText.style.display = "none";

                reader.addEventListener("load", function() {
                    console.log(this);
                    previewImg.setAttribute('src', this.result);
                });

                reader.readAsDataURL(file);
            }
        });
    }
}