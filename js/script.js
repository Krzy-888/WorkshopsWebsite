        function KopiujCode(button) {
            const code = button.parentElement.querySelector("code").innerText;

            navigator.clipboard.writeText(code);

            button.innerText = "Skopiowano!";
            
            setTimeout(() => {
                button.innerText = "Kopiuj";
            }, 1500);
        }