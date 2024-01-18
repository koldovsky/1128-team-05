# HTML Template Repository with HTML Proofer

This template repository includes preconfigured GitHub Action that will validate html files in a project with (HTMLProofer)[https://github.com/gjtorikian/html-proofer/].

Validation is performed with dynamic pre-rendering of html files so it will allow to construct them with JavaScript on the fly.

HTML files with 'partial.html' suffix will be ignored, so validator is compatible with dynamic construction of website with html includes like (HTML Data Include)[https://github.com/programmingmentor/html-data-include].
<!-- 
        Кожний в кого є вже свій блок може вже додавати файл(навіть пустий), 
        і підключати до свого тегу. Номер  свого блоку можна дізнатись 
        з таблички https://docs.google.com/document/d/1bk7AAr5NBxZagQbUkDvmVNEENFkMBXEYJHQKXBkI4l4/edit?usp=sharing

        Як я пропоную називати файли, щоб було однаково?
        index.ваша_назва.partial.html
        Чому index на початку? Необов'язково, але для того, щоб було зрозуміло в якому файлі підключений цей файл.
        Чому .partial.html в кінці? це обов'язково, без цього нічого не спрацює)

        Тег <section> можна замінити на інший, я його додала для зручності.
        
       -->

