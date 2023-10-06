 <script>
        const message = "Hello, world! This is a typed message.";
        const greetingsElement = document.getElementById('greetings');
        let charIndex = 0;

        function typeMessage() {
            if (charIndex < message.length) {
                greetingsElement.innerHTML += message.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }

        const typingInterval = setInterval(typeMessage, 50); // Adjust the typing speed (milliseconds per character)
    </script>